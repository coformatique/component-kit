import { Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { AppButton } from '../buttons/AppButton';
import { AppDialog, AppDialogProps } from './AppDialog';

export default {
    title: 'UI/Dialog/Dialog',
    component: AppDialog,
} as Meta;

type Args = {
    showAltAction: boolean;
    showFooter: boolean;
    content: string;
};

const Template: Story<Omit<AppDialogProps, 'altAction' | 'footer'> & Args> = ({
    showAltAction,
    contentEditable,
    showFooter,
    content,
    ...rest
}) => {
    const [open, setOpen] = useState(true);
    const [loading, setLoading] = useState(false);
    return (
        <>
            <AppButton variant="primaryContained" onClick={() => setOpen(true)}>
                Open dialog
            </AppButton>
            <AppDialog
                fullWidth
                open={open}
                {...rest}
                footer={showFooter ? <Typography>Footer</Typography> : null}
                onClose={() => setOpen(false)}
                action={
                    <AppButton
                        loading={loading}
                        loadingText="Doing action"
                        fullWidth
                        variant="primaryContained"
                        onClick={() => {
                            setLoading(true);
                            setTimeout(() => {
                                setLoading(false);
                                setOpen(false);
                            }, 2000);
                        }}
                    >
                        Action
                    </AppButton>
                }
                altAction={showAltAction ? { label: 'Alternative', handler: () => setOpen(false) } : undefined}
            >
                {content && <Typography>{content}</Typography>}
            </AppDialog>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    showAltAction: true,
    showFooter: true,
    maxWidth: 'xs',
    verticalButtons: true,
    title: 'Dialog title',
    content: 'Main Content',
};
Default.argTypes = {
    maxWidth: {
        control: { type: 'radio' },
        options: ['xs', 'sm', 'md'],
    },
};
Default.storyName = 'Dialog';
