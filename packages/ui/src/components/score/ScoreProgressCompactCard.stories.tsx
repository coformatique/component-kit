import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { ScoreProgressCompactCard, ScoreProgressCompactCardProps } from './ScoreProgressCompactCard';

export default {
  title: 'UI/Score/ScoreProgressCompactCard',
  component: ScoreProgressCompactCard,
} as Meta;

const Template: Story<ScoreProgressCompactCardProps> = args => {
  return (
    <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center" bgcolor="white" p={4}>
      <ScoreProgressCompactCard {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  score: 0.5,
  title: 'Title',
};
Default.argTypes = {
  color: {
    control: 'radio',
    options: ['primary', 'default'],
  },
};
Default.storyName = 'ScoreProgressCompactCard';
