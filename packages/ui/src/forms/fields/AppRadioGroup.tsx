import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorText } from '../../components/ErrorText';
import { AppRadio } from '../../components/inputs';
import { getErrorByPath } from '../getErrorByPath';
import { GroupFieldProps, useGroupFieldStyles } from './HorizontalGroupLabel';

export const AppRadioGroup = ({
  name,
  label,
  options,
  row,
  divider,
  size,
  ...props
}: GroupFieldProps & RadioGroupProps) => {
  const styles = useGroupFieldStyles({ row, divider });
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    control: {
      _options: { mode },
    },
  } = useFormContext();
  const error = getErrorByPath(errors, name);
  const fieldValue = watch(name);
  const { ref, ...fieldProps } = register(name);

  return (
    <FormControl component="fieldset" color="primary" fullWidth>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup {...props} row={row} sx={styles} name={name}>
        {options.map(({ value, label, disabled }) => (
          <Fragment key={value}>
            <FormControlLabel
              value={value}
              label={label as string}
              disabled={disabled}
              control={
                <AppRadio
                  {...fieldProps}
                  onChange={event => {
                    // update value
                    setValue(name, event.target.value, {
                      shouldDirty: true,
                      shouldTouch: true,
                      shouldValidate: mode !== 'onSubmit',
                    });
                    // if there's a post change function, run it
                    props.onChange?.(event, event.target.value);
                  }}
                  checked={value === fieldValue}
                  inputRef={ref}
                  size={size}
                />
              }
            />
            {divider && <Divider />}
          </Fragment>
        ))}
      </RadioGroup>
      <ErrorText error={error} />
    </FormControl>
  );
};
