import { Box, BoxProps, TextFieldProps } from '@mui/material';
import { ReactNode } from 'react';
import { ErrorText, IconWithTooltip } from '../../..';
import { DropdownSelectSharedProps } from './types';

const margins: Record<NonNullable<TextFieldProps['margin']>, BoxProps> = {
    normal: { mt: 1, mb: 0.5 },
    dense: {},
    none: { mt: -1, mb: -0.5 },
};

export const DropdownSelectLayout = ({
    fullWidth,
    children,
    fieldError,
    tooltipText,
    margin = 'normal',
}: {
    children: ReactNode;
    fullWidth?: boolean;
    fieldError?: DropdownSelectSharedProps['fieldError'];
    tooltipText?: string;
    margin: TextFieldProps['margin'];
}) => {
    return (
        <Box display="flex" flexDirection="column" width={fullWidth === false ? 'auto' : '100%'} {...margins[margin]}>
            <Box display="flex" alignItems="center" width={fullWidth === false ? 'auto' : '100%'}>
                {children}
                {tooltipText && <IconWithTooltip type="info" title={tooltipText} textField sx={{ pt: 0 }} />}
            </Box>
            <ErrorText indent error={fieldError} />
        </Box>
    );
};
