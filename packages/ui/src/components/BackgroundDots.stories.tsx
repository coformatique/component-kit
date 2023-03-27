import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import colors from '../theme/colors';
import { BackgroundDots, BackgroundDotsProps } from './BackgroundDots';

export default {
  title: 'UI/Misc/Background Dots',
  component: BackgroundDots,
} as Meta;

const Template: Story<BackgroundDotsProps & { color: string }> = ({ color, ...args }) => {
  return (
    <Box bgcolor={color || colors.blue} width="100%" height="100%">
      <BackgroundDots {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  clipPath: 'far',
};
Default.argTypes = {
  clipPath: {
    control: 'radio',
    options: ['far', 'close'],
  },
  color: { control: 'color' },
  dotsColor: { control: 'color' },
  fillColor: { control: 'color' },
};
Default.storyName = 'Background Dots';
