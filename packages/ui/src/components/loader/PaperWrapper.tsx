import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { FC, ReactNode } from 'react';

export interface PaperWrapperProps {
  wrap?: boolean;
  children?: ReactNode;
}

export const PaperWrapper: FC<PaperWrapperProps> = ({ wrap, children }) => {
  return wrap ? (
    <Paper>
      <Box px={9} py={7}>
        {children}
      </Box>
    </Paper>
  ) : (
    <>{children}</>
  );
};
