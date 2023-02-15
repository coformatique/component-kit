import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC, ReactNode } from 'react';
import { screenHeight } from '../../theme/consts';
import './loader.scss';

export interface PaperWrapperProps {
    wrap?: boolean;
    children?: ReactNode;
}

export const PaperWrapper: FC<PaperWrapperProps> = ({ wrap, children }) => {
    return wrap ? (
        <Paper>
            <Box px={9} py={7}>
                {children}
            </Box>
        </Paper>
    ) : (
        <>{children}</>
    );
};

export interface LoaderProps {
    height?: number | string;
    error?: boolean;
    paperWrap?: boolean;
}

export const Loader: FC<LoaderProps> = ({ height, error, paperWrap }) => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));
    height = height || screenHeight(mobile);

    return (
        <Box
            display="flex"
            width="100%"
            height={height}
            flexDirection="column"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
        >
            {error ? (
                <PaperWrapper wrap={paperWrap}>
                    <img width={90} height={110} src="" alt="Server Error" />
                    <Box px={3} mt={3}>
                        <Typography color="black">Internal server error</Typography>
                        <Typography variant="body2" color="text.darkGray">
                            Sorry for this, we have been alerted.
                            <br />
                            Please refresh this page or try again later.
                        </Typography>
                    </Box>
                </PaperWrapper>
            ) : (
                <div className="loader">
                    <div />
                    <div className="centerRect" />
                    <div className="lastRect" />
                </div>
            )}
        </Box>
    );
};
