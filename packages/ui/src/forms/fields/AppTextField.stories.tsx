import { Box, MenuItem } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { AppForm, AppTextField, AppTextFieldProps } from '..';

export default {
  title: 'Fields/AppTextField',
  component: AppTextField,
} as Meta;

const Template: Story<AppTextFieldProps & { highlightMargin: boolean }> = args => {
  const [value, setValue] = useState('');
  useEffect(() => {
    args.value && setValue(args.value as string);
  }, [args.value]);

  return (
    <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
      <Box {...(args.highlightMargin && { bgcolor: '#ff8a8a6b' })} {...(args.fullWidth && { width: '100%' })}>
        <AppForm>
          <Field {...{ value, setValue, ...args }} />
        </AppForm>
      </Box>
    </Box>
  );
};

const Field = ({ setValue, ...args }: any) => {
  const context = useFormContext();
  console.log(`🚀 ~ context`, context?.watch('f1'));

  return (
    <AppTextField
      {...args}
      // value={value}
      onChange={e => setValue(e.target.value)}
      sx={{ minWidth: '200px' }}
      name="f1"
    >
      {args.select && [1, 2, 3, 4].map(i => <MenuItem value={i}>Option {i}</MenuItem>)}
    </AppTextField>
  );
};

export const Default = Template.bind({});

Default.args = {
  variant: 'filled',
  value: 'text',
  label: 'Label',
  fullWidth: false,
  required: false,
  select: false,
  disabled: false,
  error: false,
  placeholder: 'text',
  autoFocus: true,
  size: 'medium',
  title: 'Native HTML Popup!',
  margin: 'normal',
  highlightMargin: false,
  color: 'primary',
};

Default.argTypes = {
  variant: {
    control: 'radio',
    options: ['filled', 'outlined', 'standard'],
  },
  margin: {
    control: 'radio',
    options: ['normal', 'dense', 'none'],
    description: `activate the next option "highlightMargin" to see the margin change.
      best visibile with the filled variant`,
  },
  highlightMargin: { description: 'adds a light red background color to field container (story only prop)' },
  color: {
    control: 'radio',
    options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
  },
  size: {
    control: 'radio',
    options: ['medium', 'small', 'labelless'],
  },
  autoFocus: {
    description: `if you set this to true and refresh the page, 
      the field will automatically capture focus
      so you can start typing immediately`,
  },
  title: {
    description: 'native html hover tooltip text',
  },
};

Default.storyName = 'AppTextField';
