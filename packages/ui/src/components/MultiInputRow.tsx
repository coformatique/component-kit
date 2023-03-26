import { Grid } from '@mui/material';
import { ReactNode } from 'react';

const sx = { alignItems: 'baseline' };
export const MultiInputRow = ({ children, fullWidth = true }: { children: ReactNode[]; fullWidth?: boolean }) => (
  <Grid container spacing={1} {...(fullWidth ? sx : { sx: { ...sx, width: 'max-content' } })}>
    {children?.map(
      (child, index) =>
        child && (
          <Grid key={index} item xs={12} sm>
            {child}
          </Grid>
        ),
    )}
  </Grid>
);
