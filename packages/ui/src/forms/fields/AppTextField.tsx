import { Box } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FieldError, useFormContext } from 'react-hook-form';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { ErrorText } from '../../components/ErrorText';
import { IconWithTooltip } from '../../components/tooltips';
import { AppFormField } from '../AppForm';

export type AppTextFieldProps = AppFormField &
  Omit<TextFieldProps, 'error'> & {
    tooltipText?: string;
    number?: boolean;
    hideError?: boolean;
    error?: FieldError | string | false;
  };

export const AppTextField = ({
  name,
  variant = 'filled',
  children,
  margin = 'normal',
  fullWidth = true,
  tooltipText,
  error: _error,
  number = false,
  hideError,
  onChange,
  inputProps,
  ...props
}: AppTextFieldProps) => {
  const { register, formState, getFieldState, watch } = useFormContext();
  const error = getFieldState(name, formState).error;
  const value = watch(name);

  const fieldProps = register(name, {
    setValueAs: (v: string) => {
      if (v === '') return null;
      if (number && !isNaN(Number(v))) return Number(v);
      return v;
    },
  });

  return (
    <Box width={fullWidth ? '100%' : 'auto'}>
      <Box display="flex">
        <TextField
          {...props}
          id={name}
          variant={variant}
          margin={margin}
          fullWidth={fullWidth}
          error={Boolean(error || _error)}
          {...fieldProps}
          onChange={e => {
            fieldProps.onChange(e);
            onChange?.(e);
          }}
          type={number ? 'number' : 'text'}
          inputProps={{
            ...(number && { step: 'any' }),
            ...inputProps,
          }}
          {...(props.select && { value })}
        >
          {children}
        </TextField>
        {tooltipText && <IconWithTooltip type="info" title={tooltipText} textField />}
      </Box>
      {!hideError && <ErrorText indent error={error} />}
    </Box>
  );
};

export const AppTextFieldFormatted = ({
  name,
  fullWidth = true,
  size = 'labelless',
  variant = 'filled',
  valueIsNumericString,
  ...props
}: AppFormField &
  Omit<NumericFormatProps, 'size'> &
  Omit<TextFieldProps, 'error' | 'defaultValue' | 'type' | 'value'>) => {
  const { formState, getFieldState } = useFormContext();
  const { setValue, watch } = useFormContext();
  const error = getFieldState(name, formState).error;
  const value = watch(name);

  return (
    <Box width={fullWidth ? '100%' : 'auto'}>
      <Box display="flex">
        <NumericFormat
          {...props}
          customInput={TextField}
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          name={name}
          onValueChange={values =>
            setValue(name, valueIsNumericString ? Number(values.value) : values.value, {
              shouldDirty: true,
              shouldTouch: true,
            })
          }
          value={value}
        />
      </Box>
      {<ErrorText indent error={error} />}
    </Box>
  );
};
