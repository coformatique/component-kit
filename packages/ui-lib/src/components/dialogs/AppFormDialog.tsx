import NiceModal from '@ebay/nice-modal-react';
import { FC, useCallback, useContext, useMemo } from 'react';
import { FieldError, SubmitHandler, useFormContext, UseFormProps, UseFormReturn } from 'react-hook-form';
import { AppFormContext, AppFormProps, useAppForm } from '../../forms';
import { AppButton } from '../buttons/AppButton';
import { AltAction, AppDialog, AppDialogProps } from './AppDialog';

type PartialBaseProps<FormValues extends object, Dependencies extends object = any> = {
    appFormProps?: Partial<AppFormProps<FormValues, Dependencies>>;
    formProps?: UseFormProps<FormValues>;
    dialogProps?: Partial<AppDialogProps>;
    formDependencies?: Dependencies;
};

type BaseProps<FormValues extends object, Dependencies extends object = any> = {
    appFormProps?: AppFormProps<FormValues, Dependencies>;
    formProps?: UseFormProps<FormValues>;
    dialogProps: AppDialogProps | ((v: FormValues) => AppDialogProps);
    formDependencies?: Dependencies;
};

export type AppFormDialogComponentProps<FormValues extends object, Dependencies extends object = any> = BaseProps<
    FormValues,
    Dependencies
> & { formContext: UseFormReturn<FormValues> };

export type AppFormDialogProps<FormValues extends object, Dependencies extends object = any> = BaseProps<
    FormValues,
    Dependencies
> & { Component: FC<AppFormDialogComponentProps<FormValues, Dependencies>> };

export type AppFormDialogHookProps<FormValues extends object, Dependencies extends object = any> = PartialBaseProps<
    FormValues,
    Dependencies
> & {
    Component?: FC<AppFormDialogComponentProps<FormValues, Dependencies>>;
};

export const AppFormDialog = <FormValues extends object, Dependencies extends object = any>(
    props: AppFormDialogProps<FormValues, Dependencies>
) => useAppFormDialog(props)[0];

export const useAppFormDialog = <FormValues extends object, Dependencies extends object = any>(
    props: AppFormDialogProps<FormValues, Dependencies>
) =>
    useAppForm<FormValues, Dependencies>({
        ...props.appFormProps,
        formDependencies: props.formDependencies,
        children: <AppFormDialogInternal {...props} />,
    });

const mergeProps = <T extends AppFormDialogHookProps<any, any>>(props1?: T, props2?: T): T =>
    ({
        ...props1,
        ...props2,
        appFormProps: { ...props1?.appFormProps, ...props2?.appFormProps },
        dialogProps: { ...props1?.dialogProps, ...props2?.dialogProps },
        formDependencies: { ...props1?.formDependencies, ...props2?.formDependencies },
        formProps: { ...props1?.formProps, ...props2?.formProps },
    } as T);

const AppFormDialogInternal = <FormValues extends object, Dependencies extends object = any>(
    props: AppFormDialogProps<FormValues, Dependencies>
) => {
    const { appFormProps, dialogProps: _dialogProps, formDependencies, formProps, Component } = props;

    const onFormSubmit = useContext(AppFormContext);

    const formContext = useFormContext<FormValues>();
    const {
        handleSubmit,
        formState: { isSubmitting, isDirty: dirty, errors },
        getValues,
    } = formContext;

    const dialogProps = typeof _dialogProps === 'object' ? _dialogProps : _dialogProps(getValues() as FormValues);
    const { action, altAction, fullScreen, enableNonDirtySubmit, modal } = dialogProps;

    const handleAltActionClick = (altAction: AltAction) =>
        altAction.handler ? altAction.handler : handleSubmit(onFormSubmit as SubmitHandler<FormValues>);

    return (
        <AppDialog
            {...dialogProps}
            modal={modal}
            action={
                action ? (
                    typeof action === 'string' ? (
                        <AppButton
                            variant="primaryContained"
                            disabled={!enableNonDirtySubmit && !dirty}
                            loading={isSubmitting}
                            type="submit"
                            onClick={onFormSubmit}
                            fullWidth
                            data-error="Sorry, didn't work"
                            data-error-hover="Try again?"
                        >
                            {action}
                        </AppButton>
                    ) : (
                        action
                    )
                ) : null
            }
            error={(errors as { '': FieldError })['']}
            altAction={
                altAction && typeof altAction === 'object' && (altAction as AltAction).label
                    ? {
                          ...altAction,
                          onClick: handleAltActionClick(altAction as AltAction),
                          center: fullScreen,
                      }
                    : altAction
            }
        >
            <Component
                appFormProps={appFormProps}
                dialogProps={dialogProps}
                formDependencies={formDependencies}
                formProps={formProps}
                formContext={formContext}
            />
        </AppDialog>
    );
};

export const createUseAppFormDialog =
    <T extends AppFormDialogHookProps<any, any>>(Component: FC<T & { id: string }>) =>
    (props?: T) => {
        const show = useCallback(
            (deps?: T) => NiceModal.show(Component, deps ? mergeProps<T>(props, deps) : props),
            [props]
        );
        const hide = useCallback(() => NiceModal.hide(Component), []);

        return useMemo(() => [show, hide] as const, [hide, show]);
    };

/**
 * FORM DIALOG TEMPLATE
 */
// import { z } from 'zod';
// import {
// 	AppFormDialog,
// 	AppFormDialogHookProps,
// 	AppFormDialogComponentProps,
// 	createUseAppFormDialog,
// } from 'ui-lib';
// import NiceModal, { useModal } from '@ebay/nice-modal-react';

// interface DialogNameDialogDependencies {}

// const schema = z.object({});

// export type DialogNameFormFields = z.infer<typeof schema>;

// const Component = (props: AppFormDialogComponentProps<DialogNameFormFields, DialogNameDialogDependencies>) => {
// 	const { formContext, formDependencies } = props;
// 	const {
// 		control,
// 		watch,
// 		formState: { errors },
// 		setValue: setFieldValue,
// 	} = formContext;
// 	const [fieldName] = watch(['fieldName']);
// 	const {} = formDependencies ?? {};

// 	return <></>;
// };

// type Props = AppFormDialogHookProps<DialogNameFormFields, DialogNameDialogDependencies>;

// const DialogNameFormDialog = NiceModal.create((props: Props) => {

// 	const modal = useModal();
// 	const { appFormProps, dialogProps, ...rest } = props;
// 	return (
// 		<AppFormDialog<DialogNameFormFields, DialogNameDialogDependencies>
// 			appFormProps={{ schema, ...appFormProps }}
// 			dialogProps={{
// 				modal,
// 				...dialogProps,
// 			}}
// 			Component={Component}
// 			{...rest}
// 		/>
// 	);
// });

// const useDialogNameFormDialog = createUseAppFormDialog<Props>(DialogNameFormDialog);

// export default useDialogNameFormDialog;
// ///////////////////////////////////////
