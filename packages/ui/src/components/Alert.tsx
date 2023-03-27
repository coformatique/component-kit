import { alpha } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import { FC, ReactNode } from 'react';
import colors from '../theme/colors';

export const AlertBox: FC<BoxProps & { action?: ReactNode }> = ({ children, action, ...rest }) => {
  return (
    <Box
      p={2.25}
      display="flex"
      fontSize="1rem"
      borderRadius="10px"
      color={colors.blue}
      bgcolor={alpha(colors.blue, 0.05)}
      alignItems="center"
      mb={1}
      {...rest}
    >
      {children}
      {action && (
        <Box ml="auto" my={-2}>
          {action}
        </Box>
      )}
    </Box>
  );
};
