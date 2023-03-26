import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface VerticalGroupLabelProps {
  label: string;
  description?: string;
}

const boxStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  padding: '5px',
  alignItems: 'start',
  rowGap: 0.5,
};

export const VerticalGroupLabel = ({ label, description }: VerticalGroupLabelProps) => {
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
