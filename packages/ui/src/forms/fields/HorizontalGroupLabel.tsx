import { RadioProps } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

export interface GroupFieldProps {
  name: string;
  label?: string;
  row?: boolean;
  divider?: boolean;
  options: Array<{ label: ReactNode; value: string | number; disabled?: boolean }>;
  size?: RadioProps['size'];
}

export const useGroupFieldStyles = ({ row, divider }: { row?: boolean; divider?: boolean }) => ({
  '&>label': {
    ...(row ? { alignItems: 'center' } : { alignItems: 'start' }),
    ...(divider && { paddingBottom: '9px' }),
  },
  '&>label:not(:first-child)': {
    ...(!row && divider && { paddingTop: '9px' }),
  },
  '&>hr:last-child': {
    display: 'none',
  },
});

interface HorizontalGroupLabelProps {
  label: string;
  description?: string;
}

const boxStyles = {
  display: 'flex',
  padding: '9px',
  alignItems: 'baseline',
  '&>p:first-child': {
    minWidth: '150px',
  },
};

export const HorizontalGroupLabel = ({ label, description }: HorizontalGroupLabelProps) => {
  return (
    <Box sx={boxStyles}>
      <Typography color="black">{label}</Typography>
      {description && (
        <Typography variant="body2" color="text.darkGray">
          {description}
        </Typography>
      )}
    </Box>
  );
};
