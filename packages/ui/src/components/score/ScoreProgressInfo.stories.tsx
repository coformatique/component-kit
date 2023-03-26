import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { colors } from '../..';
import { ScoreProgressInfo, ScoreProgressInfoProps } from './ScoreProgressInfo';

export default {
  title: 'UI/Score/ScoreProgressInfo',
  component: ScoreProgressInfo,
} as Meta;

const Template: Story<Omit<ScoreProgressInfoProps, 'action'> & { showAction: boolean }> = ({ showAction, ...args }) => (
  <Box display="flex" width="100%" height="100%">
    <Box
      m="auto"
      justifySelf="center"
      alignSelf="center"
      width="100%"
      p={4}
      bgcolor={args.color === 'primary' ? 'white' : colors.blue}
    >
      <ScoreProgressInfo {...args} {...(showAction && { action: { text: 'Go to somewhere', onClick: () => {} } })} />
    </Box>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  score: 0.5,
  title: 'Title',
  showAction: true,
  layout: 'normal',
  color: 'primary',
  labelVariant: undefined,
};
Default.argTypes = {
  layout: {
    control: 'radio',
    options: ['compact', 'normal'],
  },
  color: {
    control: 'radio',
    options: ['primary', 'secondary'],
  },
  labelVariant: {
    control: 'radio',
    options: ['h2', 'h3', undefined],
    description: 'Only works with layout:compact',
  },
};
Default.storyName = 'ScoreProgressInfo';
