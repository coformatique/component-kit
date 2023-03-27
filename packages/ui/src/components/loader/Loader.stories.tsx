import { Meta, Story } from '@storybook/react';
import { Loader, LoaderProps } from './Loader';

export default {
  title: 'UI/Loader',
  component: Loader,
} as Meta;

const Template: Story<LoaderProps> = args => <Loader {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  paperWrap: true,
  error: true,
};
