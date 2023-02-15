import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC, ReactNode } from 'react';
import { LOGO } from '../theme/consts';
import { AppButton } from './buttons/AppButton';

interface SplashProps {
    title?: string;
    body?: ReactNode;
    homeButton?: boolean;
    href?: string;
    logout?: JSX.Element;
}

const StyledBackgroundBox = styled(Box)(({ theme }) => ({
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    backgroundImage: 'url(/img/concentric-circles.png)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
}));

export const Splash: FC<SplashProps> = ({ title, body, homeButton, href, logout }) => {
    return (
        <StyledBackgroundBox display="flex" flexDirection="column" textAlign="center">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                flexGrow={1}
                px={3}
            >
                <Box pb={3}>
                    <img src={LOGO} width={210} alt="Logo" />
                </Box>
                <Typography paragraph variant="h1" color="white">
                    {title}
                </Typography>
                <Typography gutterBottom color="white">
                    {body}
                </Typography>
                {homeButton && (
                    <Box py={4} columnGap={1} display="flex">
                        <AppButton variant="successContained" size="large" href={href ? href : '/'}>
                            Home
                        </AppButton>
                        {logout}
                    </Box>
                )}
            </Box>
        </StyledBackgroundBox>
    );
};
