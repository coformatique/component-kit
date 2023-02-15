import { Box, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import colors from '../theme/colors.module.scss';
import * as AllIllustrations from './illustrations';

export default { title: 'UI/Icons/Illustrations' } as Meta;

interface Props {
    showIconName: boolean;
    grid: number;
    outline: boolean;
}

export const Illustrations: Story<Props> = ({ showIconName, grid, outline }) => (
    <Box
        sx={{
            display: 'grid',
            gridTemplateColumns: [...Array(grid)].map(() => 'auto').join(' '),
            gap: '16px',
        }}
    >
        {Object.keys(AllIllustrations).map((icon) => {
            const Icon = AllIllustrations[icon as keyof typeof AllIllustrations];
            return (
                <Box key={icon} sx={{ aspectRatio: '1' }}>
                    <Icon style={{ outline: outline ? `1px solid ${colors.green}` : undefined }} />
                    {showIconName && (
                        <Typography variant="caption" sx={{ overflowWrap: 'anywhere' }}>
                            {icon}
                        </Typography>
                    )}
                </Box>
            );
        })}
    </Box>
);

Illustrations.args = {
    showIconName: false,
    grid: 6,
    outline: false,
};
