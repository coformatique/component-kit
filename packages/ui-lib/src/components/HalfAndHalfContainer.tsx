import { Box, styled } from '@mui/material';
import { ReactNode } from 'react';
import colors from '../theme/colors.module.scss';

export type HalfAndHalfContainerProps = {
    left: ReactNode;
    right: ReactNode;
};

const AbsoluteSvg = styled('svg')({ position: 'absolute', height: '100%' });

export const HalfAndHalfContainer = ({ left, right }: HalfAndHalfContainerProps) => (
    <Box display="flex" flex={1}>
        <Box width="50%" py={3} px={3.5}>
            {left}
        </Box>
        <Box display="flex" width="2px" position="relative">
            <AbsoluteSvg>
                <path d="M 0 0 V 2000" strokeWidth={1} stroke={colors.ultraLightGray} strokeDasharray="4, 4" />
            </AbsoluteSvg>
        </Box>
        <Box width="50%" py={3} px={3.5}>
            {right}
        </Box>
    </Box>
);
