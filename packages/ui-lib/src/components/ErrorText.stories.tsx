import { Grid } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { AppForm, AppTextField } from '../forms';
import { AppButton } from './buttons/AppButton';
import { AppCard } from './cards';
import { AppDialog } from './dialogs';

export default { title: 'UI/Misc/ErrorText' } as Meta;

const FaultyTextField = (props: { error: string }) => {
    const { setError } = useFormContext();
    useEffect(() => {
        setTimeout(() => setError('error', { type: 'custom', message: props.error }), 0);
    }, [setError, props.error]);
    return <AppTextField label="Faulty input" name="error" />;
};

const Template: Story<{ error: string }> = ({ error }) => {
    const [open, setOpen] = useState(false);

    return (
        <Grid container spacing={3} width={500} m="auto">
            <Grid item xs={12}>
                <AppCard header={{ title: 'Faulty Card' }} error={error}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tenetur rem nostrum reprehenderit
                    facere nulla a harum qui tempora totam! Doloribus incidunt delectus ut illo pariatur, quis molestias
                    sunt dolor?
                </AppCard>
            </Grid>
            <Grid item xs={12}>
                <AppForm
                    schema={z.object({
                        error: z
                            .string({ required_error: error, invalid_type_error: error })
                            .refine(() => false, { message: error, path: [''] }),
                    })}
                    formValues={{ error: 'faulty value' }}
                    validateOnChange
                >
                    <FaultyTextField error={error} />
                </AppForm>
            </Grid>
            <Grid item xs={12}>
                <AppButton center error={error}>
                    Faulty button
                </AppButton>
            </Grid>
            <Grid item xs={12}>
                <AppButton center onClick={() => setOpen(true)}>
                    Open faulty dialog
                </AppButton>
                <AppDialog onClose={() => setOpen(false)} title="Faulty Dialog" open={open} error={error}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tenetur rem nostrum reprehenderit
                    facere nulla a harum qui tempora totam! Doloribus incidunt delectus ut illo pariatur, quis molestias
                    sunt dolor?
                </AppDialog>
            </Grid>
        </Grid>
    );
};
export const ErrorText = Template.bind({});
ErrorText.args = { error: 'Error!' };
