import { Box, LinearProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { colors } from '../..';

export type AppLinearProgressProps = {
    score: number;
    size?: 'big' | 'small';
    color?: 'primary' | 'secondary';
    label?: boolean;
    disabled?: boolean;
};

export const AppLinearProgress = ({
    size = 'small',
    score,
    color = 'primary',
    label,
    disabled = false,
}: AppLinearProgressProps) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        setValue(Math.min(100, Math.max(0, Math.round(score * 100))));
    }, [score]);

    const height = size === 'big' ? 8 : 4;
    const borderRadius = height / 2;

    const linearProgress = (
        <LinearProgress
            variant="determinate"
            color={color === 'primary' ? 'primary' : 'secondary'}
            sx={{
                height,
                borderRadius,
                backgroundColor: disabled
                    ? colors.lightGray
                    : size === 'big'
                    ? color === 'primary'
                        ? colors.lightBlue
                        : 'white'
                    : color === 'primary'
                    ? colors.strokeGray
                    : colors.lightBlue,
                // backgroundColor: colors.strokeGray,
                '&>span.MuiLinearProgress-bar1Determinate': {
                    transform: 'none !important',
                    width: `${value}%`,
                    transition: 'width ease-in-out 1s',
                    minWidth: '1px',
                    borderRadius,
                    ...(disabled && { backgroundColor: colors.mediumGray }),
                },
            }}
        />
    );

    return label ? (
        <Box display="flex" alignItems="baseline">
            <Box flex={1}>{linearProgress}</Box>
            <Typography component="span" variant="h2" ml={3} color={color === 'primary' ? 'text.blue' : 'text.green'}>
                {value}%
            </Typography>
        </Box>
    ) : (
        linearProgress
    );
};
