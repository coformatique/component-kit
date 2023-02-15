import { AppIconButton, boxShadows, InCardPaper } from '../..';
import { Box, Typography } from '@mui/material';
import { FC, forwardRef, ReactNode } from 'react';
import { CheckCircleIcon, CloseIcon, InfoCircleIcon, WarningCircleIcon } from '../../icons';
import { AppButton, AppButtonVariant } from '../buttons/AppButton';

export type SnackbarVariant = 'success' | 'info' | 'error';
const typographyColors: Record<SnackbarVariant, string> = {
    success: 'text.blue',
    error: 'text.error',
    info: 'black',
};
const iconStyles = { mr: 1, alignSelf: 'center' };
const icons: Record<SnackbarVariant, JSX.Element> = {
    success: <CheckCircleIcon color="primary" sx={iconStyles} />,
    error: <WarningCircleIcon color="error" sx={iconStyles} />,
    info: <InfoCircleIcon color="info" sx={iconStyles} />,
};
const buttonVariants: Record<SnackbarVariant, AppButtonVariant> = {
    success: 'primaryText',
    error: 'dangerText',
    info: 'primaryText',
};

export type AppSnackbarProps = {
    message?: string | ReactNode;
    variant?: SnackbarVariant;
    snackbarKey?: string | number;
    closeSnackbar?: (key: string | number) => void;
    icon?: boolean;
    secondaryButton?: {
        text: string;
        onClick: () => Promise<any> | void;
    };
    closable?: boolean;
    floating?: boolean;
};

export const Snackbar: FC<AppSnackbarProps> = forwardRef(
    (
        { variant = 'success', message, snackbarKey, closeSnackbar, icon, secondaryButton, closable, floating = true },
        ref
    ) => (
        <InCardPaper
            ref={ref}
            sx={floating ? { boxShadow: boxShadows.banner } : undefined}
            variant={variant === 'success' ? 'primary' : variant}
        >
            <Box display="flex">
                {icon && icons[variant]}
                {/* Depends on whether we want to remove the ability to customize font used in message */}
                {/* {typeof message === 'string' ? (
					<Typography variant="body2" color={typographyColors[variant]}>
						{message}
					</Typography>
				) : (
					message
				)} */}
                {/* this will let the user create typographies and probably add <b> text using a react node, 
						which are the current 2 use cases in the design */}
                <Typography variant="body2" color={typographyColors[variant]}>
                    {message}
                </Typography>
            </Box>
            {snackbarKey && closeSnackbar && (closable || secondaryButton) && (
                <Box ml={2} display="flex">
                    {secondaryButton && (
                        <AppButton
                            size="small"
                            variant={buttonVariants[variant]}
                            onClick={() => {
                                const p = secondaryButton.onClick();
                                if (p?.then) {
                                    p.then(() => {
                                        closeSnackbar(snackbarKey);
                                    });
                                } else closeSnackbar(snackbarKey);
                            }}
                        >
                            {secondaryButton.text}
                        </AppButton>
                    )}
                    {closable && (
                        <AppIconButton onClick={() => closeSnackbar(snackbarKey)}>
                            <CloseIcon />
                        </AppIconButton>
                    )}
                </Box>
            )}
        </InCardPaper>
    )
);
