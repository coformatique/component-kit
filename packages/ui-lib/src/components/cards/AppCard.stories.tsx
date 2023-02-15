import { Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { AppButton } from '../buttons/AppButton';
import { AppCard, AppCardProps } from './AppCard';

export default {
    title: 'UI/Cards/Card',
    component: AppCard,
} as Meta;

const Template: Story<AppCardProps> = ({ title, ...rest }) => {
    return (
        <AppCard action={<AppButton fullWidth>Action</AppButton>} {...rest} header={{ title }}>
            <Typography>Main Content</Typography>
        </AppCard>
    );
};

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
    error: 'Error!',
    smallTitle: false,
    bottomPadding: 3,
    sticky: false,
    elevation: 1,
    bigPadding: false,
};
Default.argTypes = {
    elevation: {
        description: 'Max is 24, 0 means no paper',
    },
};
Default.storyName = 'Card';
