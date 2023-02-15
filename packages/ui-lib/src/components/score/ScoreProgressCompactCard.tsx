import { Box, Card, CardProps, Typography } from '@mui/material';
import colors from '../../theme/colors.module.scss';
import { BORDER_RADIUS_LG } from '../../theme/consts';
import { AppLinearProgress } from './AppLinearProgress';

export type ScoreProgressCompactCardProps = {
    title: string;
    score?: number;
    subTitle?: string;
    showScore?: boolean;
    isActive?: boolean;
    disabled?: boolean;
} & CardProps;

export const ScoreProgressCompactCard = ({
    score = 0,
    title,
    subTitle,
    showScore = false,
    isActive = false,
    disabled = false,
    ...cardProps
}: ScoreProgressCompactCardProps) => {
    const value = Math.min(100, Math.max(0, Math.round(score * 100)));

    const { sx, ...rest } = cardProps;
    return (
        <Card
            elevation={0}
            sx={{
                width: '100%',
                minWidth: 150,
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: isActive ? colors.blue : colors.ultraLightGray,
                borderRadius: isActive ? '8px' : `${BORDER_RADIUS_LG}px`,
                ...(!isActive && { ':hover': { backgroundColor: colors.ultraLightBlue } }),
                cursor: 'pointer',
                padding: 2,
                ...sx,
            }}
            {...rest}
        >
            <Box>
                <Typography variant="body2" color={isActive ? 'white' : disabled ? colors.warmGray : 'black'}>
                    {title}
                </Typography>
                {subTitle && (
                    <Typography
                        display="block"
                        variant="body2"
                        color={isActive ? colors.lightBlue : disabled ? colors.warmGray : colors.black}
                    >
                        {subTitle}
                    </Typography>
                )}
            </Box>
            {showScore && (
                <Box minWidth={50} display="flex" flexDirection="column" mb={0.5}>
                    <Typography variant="h2" color={isActive ? 'white' : 'black'} mb={1} alignSelf="flex-end">
                        {Math.round(value)}%
                    </Typography>
                    <AppLinearProgress color={isActive ? 'secondary' : 'primary'} score={score} />
                </Box>
            )}
        </Card>
    );
};
