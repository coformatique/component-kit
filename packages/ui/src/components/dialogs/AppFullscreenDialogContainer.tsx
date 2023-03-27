import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';
import { spacingTheme } from '../../theme/mui';

export type AppFullscreenDialogContainerProps = {
  left: ReactNode;
  right: ReactNode;
  leftWidth?: 320 | 240;
  spacing?: 80 | 40;
  containerBoxProps?: BoxProps;
};

export const AppFullscreenDialogContainer = ({
  left,
  right,
  leftWidth = 320,
  spacing = 80,
  containerBoxProps,
}: AppFullscreenDialogContainerProps) => (
  <Box
    display="flex"
    flexGrow={1}
    sx={{ [spacingTheme.breakpoints.down('md')]: { flexDirection: 'column' } }}
    width="100%"
    maxWidth={1280}
    m="auto"
    pb={2}
    {...containerBoxProps}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: leftWidth,
        flexShrink: 0,
        mr: `${spacing}px`,
        [spacingTheme.breakpoints.down('md')]: { width: '100%', height: 'auto', flex: 'unset', mb: 3 },
      }}
    >
      {left}
    </Box>
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        [spacingTheme.breakpoints.down('md')]: { width: '100%', height: 'auto', flex: 'unset' },
      }}
    >
      {right}
    </Box>
  </Box>
);
