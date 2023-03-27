import { Box, Card, Typography } from '@mui/material';
import { ReactNode } from 'react';
import colors from '../../theme/colors';

export type BannerCardProps = {
  action?: ReactNode;
  children?: ReactNode;
  title?: string | false;
  background?: 'lightBlue' | 'white';
};

export const BannerCard = ({ title, children, action, background = 'lightBlue' }: BannerCardProps) => (
  <Card sx={{ p: 3, ...(background === 'lightBlue' && { background: colors.ultraLightBlue }) }}>
    {title && (
      <Typography mb={3} variant="h2" color="text.blue">
        {title}
      </Typography>
    )}
    {children}
    {action && <Box mt={3}>{action}</Box>}
  </Card>
);
