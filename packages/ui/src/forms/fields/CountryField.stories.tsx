import { Meta, Story } from '@storybook/react';
import { AppForm } from '../AppForm';
import { CountryField } from './CountryField';

export default {
  title: 'Fields/Country Field',
  component: CountryField,
} as Meta;

const Template: Story = args => (
  <AppForm
    formValues={{ country: { id: 'FI', name: 'Finland' } }}
    onFormSubmit={values => {
      console.log(JSON.stringify(values, null, 2));
      return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          clearTimeout(wait);
          resolve({});
        }, 1000);
      });
    }}
  >
    <CountryField {...args} />
  </AppForm>
);

export const Default = Template.bind({});
Default.storyName = 'Country Field';
