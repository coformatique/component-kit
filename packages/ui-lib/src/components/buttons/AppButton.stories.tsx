import { css } from '@emotion/css';
import { Box, Grid } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { AppButton, AppButtonProps, appButtonVariants } from './AppButton';

export default {
    title: 'UI/Buttons/Button',
    component: AppButton,
} as Meta;

const Template: Story<AppButtonProps & { label: string }> = (args) => (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <AppButton {...args} sx={{ margin: 'auto' }}>
            {args.label}
        </AppButton>
    </Box>
);

export const Button = Template.bind({});
Button.args = {
    size: 'large',
    label: 'label',
    variant: 'primaryContained',
    loading: false,
    disabled: false,
    fullWidth: false,
    error: '',
};
Button.argTypes = {
    size: {
        control: { type: 'radio' },
        options: ['large', 'small'],
    },
    variant: {
        control: { type: 'radio' },
        options: [
            'primaryContained',
            'primaryContainedLight',
            'primaryOutlined',
            'primaryText',
            'successContained',
            'dangerContained',
            'dangerContainedLight',
            'dangerOutlined',
            'dangerText',
        ],
    },
    children: {
        options: null,
        control: { type: null },
    },
};

// All variants in one page
const VariantsTemplate: Story<{ label: string }> = (args) => (
    <div
        className={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 10,
            '& > span': { margin: 'auto' },
            '& > span:nth-child(7n+1)': { margin: 0 },
        })}
    >
        {['Size', '', 'Large', '', '', 'Small', ''].map((s) => (
            <span key={s}>{s}</span>
        ))}
        {[
            'Variant\\State',
            'Default/Active/Hover/Focus',
            'Loading',
            'Disabled',
            'Default/Active/Hover/Focus',
            'Loading',
            'Disabled',
        ].map((s) => (
            <span key={s}>{s}</span>
        ))}
        {appButtonVariants.map((variant) => (
            <>
                <span>{variant}</span>
                {(['large', 'small'] as const).map((size) =>
                    [{}, { loading: true }, { disabled: true }].map((state, i) => (
                        <AppButton key={variant + size + i} variant={variant} size={size} {...state} sx={{ m: 'auto' }}>
                            {args.label}
                        </AppButton>
                    ))
                )}
            </>
        ))}
    </div>
);

export const Variants = VariantsTemplate.bind({});
Variants.args = { label: 'Label' };

// How different states act together
const StatesTemplate: Story<AppButtonProps & { label: string }> = (args) => (
    <Grid container spacing={2}>
        {[{ center: true }, undefined].map((center) =>
            [{ fullWidth: true }, undefined].map((fullWidth) =>
                [{ loading: true }, undefined].map((loading) =>
                    [{ error: args.error || 'ERROR!!' }, undefined].map((error) => (
                        <Grid key={`${center}-${fullWidth}-${loading}-${error}`} item xs={3}>
                            <AppButton {...args} {...center} {...fullWidth} {...loading} {...error}>
                                {`${center ? 'center' : ''} ${fullWidth ? 'fullWidth' : ''} ${
                                    loading ? 'loading' : ''
                                } ${error ? 'error' : ''}`.trim() || args.label}
                            </AppButton>
                        </Grid>
                    ))
                )
            )
        )}
    </Grid>
);

export const States = StatesTemplate.bind({});
States.args = {
    size: 'large',
    variant: 'primaryContained',
    disabled: false,
    loading: false,
    fullWidth: false,
    error: '',
    center: false,
    label: 'label',
};
States.argTypes = {
    size: {
        control: { type: 'radio' },
        options: ['large', 'small'],
    },
    variant: {
        control: { type: 'radio' },
        options: [
            'primaryContained',
            'primaryOutlined',
            'primaryContainedLight',
            'text',
            'dangerContained',
            'dangerOutlined',
            'success',
        ],
    },
    children: {
        options: null,
        control: { type: null },
    },
};
