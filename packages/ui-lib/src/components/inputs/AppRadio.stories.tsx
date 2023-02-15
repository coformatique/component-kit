import { Box, SwitchProps } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { AppRadio } from './AppRadio';

export default { title: 'UI/Radio', component: AppRadio } as Meta;

const Template: Story<SwitchProps> = (args) => {
    return (
        <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AppRadio {...args} />
        </Box>
    );
};
export const Default = Template.bind({});
Default.args = { checked: false, size: 'small', disabled: false };
Default.argTypes = {
    size: {
        control: 'radio',
        options: ['small', 'medium'],
    },
};

const AllVariantsTemplate: Story<SwitchProps> = (args) => {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: 'repeat(2, 1fr)',
            }}
        >
            {(['medium', 'small'] as Array<SwitchProps['size']>).map((size) =>
                [false, true].map((disabled) =>
                    [true, false].map((checked) => (
                        <div>
                            <AppRadio {...args} size={size} disabled={disabled} checked={checked} />
                            <p>
                                {size}
                                {checked ? '/checked' : '/unchecked'}
                                {disabled ? '/disabled' : ''}
                            </p>
                        </div>
                    ))
                )
            )}
        </Box>
    );
};
export const AllVariants = AllVariantsTemplate.bind({});
