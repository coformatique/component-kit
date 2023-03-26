import { Meta, Story } from '@storybook/react';
import { AppForm } from '../AppForm';
import { StateField } from './StateField';

export default {
  title: 'Fields/State Field',
  component: StateField,
} as Meta;

const Template: Story = args => (
  <AppForm
    formValues={{ state: { name: 'Alabama', id: 'AL' } }}
    onFormSubmit={values => {
      return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          clearTimeout(wait);
          resolve({});
        }, 1000);
      });
    }}
  >
    <StateField {...args} />
  </AppForm>
);

export const Default = Template.bind({});
Default.storyName = 'State Field';
