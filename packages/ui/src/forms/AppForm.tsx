import { zodResolver } from '@hookform/resolvers/zod';
import { createContext, PropsWithChildren, useCallback } from 'react';
import { FormProvider, Mode as ValidationMode, useForm, UseFormReturn } from 'react-hook-form';
import { Schema } from 'zod';
import { useConfirmationDialog, UseConfirmationDialogProps } from '../components/dialogs';
import { DeepPartial } from '../utils';

export type AppFormField = { name: string };

export type ConfirmationDialogState2<Values> = { values: Values };

export interface AppFormProps<Values extends object, Dependencies extends object = never> {
  formValues?: DeepPartial<Values>;
  resetWithInitialValues?: boolean;
  schema?: Schema<Values>;
  onFormSubmit?: (
    data: Values,
    formDependencies: Dependencies | undefined,
    context: UseFormReturn<any, UseFormReturn<Values, object>>,
  ) => Promise<any>;
  confirmationDialog?: Omit<UseConfirmationDialogProps<ConfirmationDialogState2<Values>>, 'onConfirm'>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  onDialogClose?: () => void;
  context?: UseFormReturn<Values>;
  formDependencies?: Dependencies;
  submitOnDirty?: boolean;
}

export const AppFormContext = createContext<() => Promise<any>>(() => Promise.resolve({}));

export const AppForm = <Values extends object, Dependencies extends object = any>(
  props: PropsWithChildren<AppFormProps<Values, Dependencies>>,
) => useAppForm(props)[0];

export const useAppForm = <Values extends object, Dependencies extends object = any>({
  formValues,
  schema,
  context,
  onFormSubmit,
  resetWithInitialValues = true,
  confirmationDialog,
  validateOnChange = false,
  validateOnBlur = true,
  children,
  formDependencies,
}: PropsWithChildren<AppFormProps<Values, Dependencies>>) => {
  const validationMode: ValidationMode =
    validateOnChange && validateOnBlur
      ? 'all'
      : validateOnChange
      ? 'onTouched'
      : validateOnBlur
      ? 'onBlur'
      : 'onSubmit';

  const formContext = useForm({
    context,
    ...(schema && { resolver: zodResolver(schema) }),
    defaultValues: formValues,
    mode: validationMode,
  });

  const { setError, reset: resetForm, handleSubmit: _handleSubmit, trigger, getValues } = formContext;

  const submitForm = useCallback(() => {
    return _handleSubmit(
      values => {
        // console.log('submitting');
        return onFormSubmit?.(values as Values, formDependencies, formContext)
          .then(() => {
            // console.log('resetting');
            resetForm(undefined, { keepValues: !resetWithInitialValues });
          })
          .catch(error => {
            console.log(`return onFormSubmit ~ error`, error);
            setError('', error);
          });
      },
      errors => {
        console.log(`errors`, errors);
      },
    )();
  }, [_handleSubmit, formContext, formDependencies, onFormSubmit, resetForm, resetWithInitialValues, setError]);

  const [showConfirmationDialog] = useConfirmationDialog<ConfirmationDialogState2<Values>>({
    ...confirmationDialog,
    onConfirm: submitForm,
  });

  const handleSubmit = useCallback(() => {
    if (confirmationDialog) {
      // debugger;
      // validate form
      trigger();
      // only show dialog if form is valid
      if (schema?.safeParse(getValues()).success) {
        const values = getValues();
        showConfirmationDialog({ state: { values: values as Values }, context: formContext });
      }
    } else return submitForm();
  }, [confirmationDialog, formContext, getValues, schema, showConfirmationDialog, submitForm, trigger]);

  return [
    <FormProvider {...formContext}>
      {/* @ts-ignore would always be defined */}
      <AppFormContext.Provider value={handleSubmit}>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {children}
        </form>
      </AppFormContext.Provider>
    </FormProvider>,
    formContext,
    handleSubmit,
  ] as const;
};
