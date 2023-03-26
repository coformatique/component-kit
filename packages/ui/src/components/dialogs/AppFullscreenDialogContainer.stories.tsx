import { Box, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { AppDialog } from './AppDialog';
import { AppFullscreenDialogContainer, AppFullscreenDialogContainerProps } from './AppFullscreenDialogContainer';

export default { title: 'UI/Dialog/Fullscreen Dialog Container' } as Meta;

type Args = Omit<AppFullscreenDialogContainerProps, 'left' | 'right'>;

const Template: Story<Args> = props => {
  return (
    <AppDialog
      fullScreen
      fullWidth
      maxWidth="sm"
      title="Fullscreen dialog"
      open
      footer={<Typography>Footer</Typography>}
    >
      <AppFullscreenDialogContainer
        left={
          <Box width="100%" height="100%" minHeight={200} bgcolor="#2b00991a">
            Left
          </Box>
        }
        right={
          <Box width="100%" height="100%" minHeight={200} bgcolor="#00d7a047">
            Right
          </Box>
        }
        {...props}
      />
    </AppDialog>
  );
};

export const Default = Template.bind({});
Default.args = { leftWidth: 320, spacing: 80 };
Default.argTypes = {
  leftWidth: { control: 'radio', options: [320, 240] },
  spacing: { control: 'radio', options: [80, 40] },
};
Default.storyName = 'Fullscreen Dialog Container';
