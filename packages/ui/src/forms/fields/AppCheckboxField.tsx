import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { useFormContext } from 'react-hook-form';
import { AppCheckbox } from '../../components/inputs';
import { AppFormField } from '../AppForm';
import { getErrorByPath } from '../getErrorByPath';

export const AppCheckboxField = ({ name, ...props }: AppFormField & Omit<FormControlLabelProps, 'control'>) => {
  const {
    register,
    formState: { touchedFields, errors },
    watch,
    setValue,
    control: {
      _options: { mode },
    },
  } = useFormContext();
  const touched = touchedFields[name];
  const error = getErrorByPath(errors, name);
  const value = watch(name);
  const fieldProps = register(name);

  return (
    <>
      <FormControlLabel
        {...props}
        checked={value}
        name={name}
        control={
          <AppCheckbox
            {...fieldProps}
            onChange={e => {
              setValue(name, e.target.checked, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: mode !== 'onSubmit',
              });
            }}
          />
        }
      />
      {error && touched && <FormHelperText error>{error}</FormHelperText>}
    </>
  );
};
