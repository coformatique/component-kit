import { ArgType } from '@storybook/addons';
import { Meta, Story } from '@storybook/react';
import { z } from 'zod';
import { AppForm } from '../AppForm';
import { dateSchema } from '../common-schemas';
import { AppDayPicker, AppDayPickerProps } from './AppDayPicker';

export default {
  title: 'Fields/Date Picker',
  component: AppDayPicker,
} as Meta;

const args: AppDayPickerProps = {
  name: 'date',
  variant: 'filled',
  fullWidth: true,
  label: undefined,
  margin: 'none',
  required: false,
};

const argTypes: Partial<Record<keyof AppDayPickerProps, ArgType>> = {
  variant: {
    options: ['filled', 'outlined', 'standard'],
    control: { type: 'select' },
  },
  fullWidth: { control: { type: 'boolean' } },
  required: { control: { type: 'boolean' } },
  margin: {
    options: ['none', 'dense'],
    control: { type: 'radio' },
  },
};

const Template: Story<AppDayPickerProps> = args => (
  <AppForm
    formValues={{ [args.name ?? 'date']: '' }}
    onFormSubmit={() => Promise.resolve({})}
    schema={z.object({ [args.name ?? 'date']: dateSchema() })}
  >
    <AppDayPicker {...args} />
  </AppForm>
);

export const DayMonthYear = Template.bind({});
export const WeekYear = Template.bind({});
export const MonthYear = Template.bind({});
export const QuarterYear = Template.bind({});
export const Year = Template.bind({});

DayMonthYear.args = { ...args, type: 'day' };
WeekYear.args = { ...args, type: 'week' };
MonthYear.args = { ...args, type: 'month' };
QuarterYear.args = { ...args, type: 'quarter' };
Year.args = { ...args, type: 'year' };

[DayMonthYear, WeekYear, MonthYear, QuarterYear, Year].forEach(i => (i.argTypes = argTypes));
