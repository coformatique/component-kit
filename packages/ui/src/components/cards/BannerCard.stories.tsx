import { Box, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { AppButton } from '../buttons/AppButton';
import { BannerCard, BannerCardProps } from './BannerCard';

export default {
  title: 'UI/Cards/Banner Card',
  component: BannerCard,
} as Meta;

type Args = Omit<BannerCardProps, 'action' | 'children'> & { action: boolean };

const Template: Story<Args> = ({ action, ...props }) => {
  return (
    <Box maxWidth={400}>
      <BannerCard
        {...props}
        action={
          action ? (
            <AppButton
              fullWidth
              size="small"
              variant={props.background === 'white' ? 'primaryContainedLight' : 'primaryContained'}
            >
              Action
            </AppButton>
          ) : undefined
        }
      >
        <Box>
          <Typography>
            This is a completely random paragraph made for the purpose of this story
            <ul>
              <li>Item One</li>
              <li>Item Two</li>
              <li>Item Three</li>
            </ul>
          </Typography>
        </Box>
      </BannerCard>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = { title: 'Card Title', background: 'lightBlue', action: true };
Default.argTypes = { background: { control: 'radio', options: ['lightBlue', 'white'] }, action: { type: 'boolean' } };
Default.storyName = 'Banner Card';
