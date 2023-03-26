import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import { ChangeEvent, Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorText } from '../../components/ErrorText';
import { AppCheckbox } from '../../components/inputs';
import { getErrorByPath } from '../getErrorByPath';
import { GroupFieldProps, useGroupFieldStyles } from './HorizontalGroupLabel';

export const AppCheckboxGroup = ({ name, label, options, row, divider }: GroupFieldProps) => {
  const styles = useGroupFieldStyles({ row, divider });

  const {
    register,
    setValue,
    watch,
    formState: { errors },
    trigger,
    control: {
      _options: { mode },
    },
  } = useFormContext();
  const error = getErrorByPath(errors, name);
  const fieldValue = watch(name);
  const { ref, onChange, onBlur, ...fieldProps } = register(name, {
    setValueAs: v => {
      return Array.isArray(v) ? v : [v];
    },
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const set = new Set<string>(fieldValue);
    const { value: newValue } = event.target;
    set.has(newValue) ? set.delete(newValue) : set.add(newValue);
    setValue(name, Array.from(set), {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: mode !== 'onSubmit',
    });
    trigger(name);
  };

  return (
    <FormControl component="fieldset" color="primary" fullWidth>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup row={row} role="group" sx={styles}>
        {options.map(({ value, label, disabled }) => (
          <Fragment key={value}>
            <FormControlLabel
              value={value}
              label={label as any}
              disabled={disabled}
              control={
                <AppCheckbox
                  {...fieldProps}
                  onChange={handleOnChange}
                  checked={Boolean(fieldValue && fieldValue.indexOf(value) > -1)}
                  inputRef={ref}
                />
              }
            />
            {divider && <Divider />}
          </Fragment>
        ))}
      </FormGroup>
      <ErrorText indent error={error} />
    </FormControl>
  );
};
