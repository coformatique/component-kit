import { Box, BoxProps, Typography } from '@mui/material';
import { FieldError } from 'react-hook-form';
import { StatusCheckErrorIcon } from '../icons';

type ErrorTextProps = {
    error?: FieldError | string | false | Array<FieldError>;
    indent?: boolean;
    center?: boolean;
} & Omit<BoxProps, 'children'>;

export const ErrorText = ({ error, indent /* indent exclamation mark */, center, ...props }: ErrorTextProps) => {
    if (!error) return null;
    return (
        <Box mb={0.5} {...props} display="flex" alignItems="center" {...(center && { justifyContent: 'center' })}>
            <StatusCheckErrorIcon fontSize="small" sx={{ ml: indent ? 2 : 0, mr: 1 }} />
            <Typography variant="body2" display="inline" color="text.error">
                {((Array.isArray(error) ? error[0] : error) as FieldError).message ?? (error as string)}
            </Typography>
        </Box>
    );
};
