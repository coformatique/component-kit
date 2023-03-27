import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import colors from '../theme/colors';
import { InCardPaper } from './cards';
import { HalfAndHalfContainer } from './HalfAndHalfContainer';
import { ScoreProgressInfo } from './score/ScoreProgressInfo';

export default {
  title: 'UI/Containers/Half And Half Container',
} as Meta;

const Template: Story<{ showExample: boolean }> = ({ showExample }) => {
  if (showExample)
    return (
      <InCardPaper noPadding variant="polkaDots">
        <HalfAndHalfContainer
          right={
            <ScoreProgressInfo
              score={0.5}
              title="T1"
              layout="compact"
              action={{ text: 'Browse 5 matches', onClick: () => {} }}
            />
          }
          left={
            <ScoreProgressInfo
              score={0.5}
              title="T2"
              layout="compact"
              action={{ text: 'Browse 5 matches', onClick: () => {} }}
            />
          }
        />
      </InCardPaper>
    );

  return (
    <Box bgcolor="#dddd" width="100%">
      <HalfAndHalfContainer
        left={
          <Box width="100%" height={200} bgcolor={colors.ultraLightBlue}>
            left
          </Box>
        }
        right={
          <Box width="100%" height={200} bgcolor={colors.ultraLightGreen}>
            right
          </Box>
        }
      />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  showExample: false,
};
Default.storyName = 'Half And Half Container';
