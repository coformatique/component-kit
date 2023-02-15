import { PropsWithChildren, useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { AppForm, AppFormContext, AppFormProps } from '../../forms';
import { AppButton } from '../buttons/AppButton';
import { AppCard, AppCardProps } from './AppCard';

export const AppFormCard = <FormValues extends {}>({
    formValues,
    resetWithInitialValues,
    schema,
    onFormSubmit,
    validateOnBlur,
    validateOnChange,
    ...props
}: PropsWithChildren<AppFormProps<FormValues, never> & AppCardProps>) => {
    return (
        <AppForm<FormValues>
            {...{ formValues, resetWithInitialValues, schema, onFormSubmit, validateOnBlur, validateOnChange }}
        >
            <AppFormCardInternal {...props} />
        </AppForm>
    );
};

const AppFormCardInternal = (props: PropsWithChildren<AppCardProps>) => {
    const {
        formState: { isDirty, isSubmitting, errors },
    } = useFormContext();
    const onFormSubmit = useContext(AppFormContext);
    const { action: _action, submitOnDirty = true, ...rest } = props;

    const error = errors[''];
    const action =
        _action && typeof _action === 'string' ? (
            <AppButton
                disabled={(submitOnDirty && !isDirty) || isSubmitting}
                loading={isSubmitting}
                onClick={onFormSubmit}
                fullWidth
                data-error="Sorry, that didn't work!"
                data-error-hover="Try again?"
                variant="primaryContained"
            >
                {_action}
            </AppButton>
        ) : (
            _action
        );

    return <AppCard {...rest} action={action} error={error} />;
};
