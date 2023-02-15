import { Meta, Story } from '@storybook/react';
import { QuickBooksButton } from './QuickBooksButton';

export default {
    title: 'UI/Buttons/QuickBooks Button',
    component: QuickBooksButton,
} as Meta;

const Template: Story<{ size: 'medium' | 'large' }> = (args) => <QuickBooksButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
};

Default.argTypes = {
    size: {
        control: 'radio',
        options: ['medium', 'large'],
    },
};
Default.storyName = 'QuickBooks Button';
