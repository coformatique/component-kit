import { Box } from '@mui/material';

export const ColoredCircle = ({ r, color }: { r: number; color: string }) => {
    return <Box sx={{ borderRadius: '50%', width: r, height: r, bgcolor: color }} />;
};
