import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { AppLinearProgress, AppLinearProgressProps } from './AppLinearProgress';

export default {
    title: 'UI/Score/AppLinearProgress',
    component: AppLinearProgress,
} as Meta;

const Template: Story<AppLinearProgressProps> = (args) => {
    return (
        <Box display="flex" width="100%" height="100%">
            <Box m="auto" justifySelf="center" alignSelf="center" width="100%" p={4}>
                <AppLinearProgress {...args} />
            </Box>
        </Box>
    );
};

export const Default = Template.bind({});
Default.args = {
    color: 'primary',
    score: 0.5,
    size: 'small',
    label: false,
    disabled: false,
};
Default.argTypes = {
    color: {
        control: 'radio',
        options: ['primary', 'secondary'],
    },
    size: {
        control: 'radio',
        options: ['small', 'big'],
    },
};
Default.storyName = 'AppLinearProgress';
