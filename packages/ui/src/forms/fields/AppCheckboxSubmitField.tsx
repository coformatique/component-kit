import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { AppCheckbox } from '../../components/inputs';
import { AppFormContext, AppFormField } from '../AppForm';

export const AppCheckboxSubmitField = ({
  name,
  onChange,
  ...props
}: AppFormField & Omit<FormControlLabelProps, 'control'>) => {
  const {
    register,
    formState: { isSubmitting },
    watch,
    reset,
  } = useFormContext();
  const value = watch(name);
  const onFormSubmit = useContext(AppFormContext);
  const fieldProps = register(name);
  return (
    <FormControlLabel
      {...fieldProps}
      onChange={(e, c) => {
        fieldProps.onChange(e);
        onChange?.(e, c);
        onFormSubmit().then(() => {
          reset({ [name]: c });
        });
      }}
      {...props}
      checked={value}
      disabled={isSubmitting}
      control={<AppCheckbox />}
    />
  );
};
