import { Meta, Story } from '@storybook/react';
import { IconWithTooltip, IconWithTooltipProps } from './IconWithTooltip';

export default {
  title: 'UI/Icons/Icon with Tooltip',
  component: IconWithTooltip,
} as Meta;

const Template: Story<IconWithTooltipProps> = args => <IconWithTooltip {...args} />;

export const Default = Template.bind({});
Default.args = { type: 'info', title: 'Tooltip info' };
Default.argTypes = {
  type: {
    control: 'radio',
    options: ['info', 'question'],
  },
};
Default.storyName = 'Icon with Tooltip';
