import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { Scale, ScaleProps } from './Scale';

export default {
  title: 'UI/Score/Scale',
  component: Scale,
} as Meta;

const Template: Story<ScaleProps> = args => {
  return (
    <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center" p={4}>
      <Box p={2} bgcolor="black">
        <Scale {...args} />
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  max: 10,
  min: 0,
  value: 5,
};
Default.argTypes = {};
Default.storyName = 'Scale';
