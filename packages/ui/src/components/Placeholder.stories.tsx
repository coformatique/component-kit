import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { AppButton } from './buttons/AppButton';
import { Placeholder, PlaceholderProps } from './Placeholder';

export default {
  title: 'UI/Placeholder',
  component: Placeholder,
} as Meta;

const Template: Story<PlaceholderProps & { showAction: boolean }> = args => (
  <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center" p={4}>
    <Placeholder {...args} action={args.showAction ? <AppButton>Action</AppButton> : undefined} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  icon: 'bolt',
  text: 'Main title',
  subtext: 'Sub text',
  showAction: true,
  type: 'fullScreen',
  footer: "'Tis a very looooooooooooooooooong footer text",
};
Default.argTypes = {
  icon: {
    control: 'radio',
    options: [
      'bolt',
      'customer',
      'finance',
      'invoice',
      'invoiceWarning',
      'product',
      'subscription',
      'company',
      'noData',
    ],
  },
  type: {
    control: 'radio',
    options: ['fullScreen', 'card', 'none'],
  },
};
Default.storyName = 'Placeholder';
