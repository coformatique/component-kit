import NiceModal, { muiDialog, NiceModalHandler } from '@ebay/nice-modal-react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { FC, isValidElement, ReactNode, SyntheticEvent, useEffect, useMemo } from 'react';
import { AppButton, AppButtonProps, DialogCloseButton, ErrorText, useSnackbar } from '../..';
import colors from '../../theme/colors.module.scss';

type OnClose = (e: SyntheticEvent) => void;

export type AppDialogProps = Omit<DialogProps, 'open' | 'onClose' | 'title'> & {
    title: ReactNode;
    subtitle?: ReactNode;
    caption?: ReactNode;
    action?: ReactNode;
    altAction?: string | AltAction | ReactNode;
    footer?: ReactNode;
    enableNonDirtySubmit?: boolean;
    error?:
        | string
        | false
        | {
              type: any;
              message?: string;
          };

    divider?: boolean;
    verticalButtons?: boolean;
    // Either supply modal or open+onClose
    // You can also supply modal and onClose as a function that runs after the dialog is closed
    open?: boolean;
    onClose?: OnClose;
    modal?: NiceModalHandler;
};

export const dialogInlinePadding = 6;

const StyledDialogActionBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& > button, & > div': {
        margin: `-${theme.spacing(0.5)} 0 -${theme.spacing(0.5)} ${theme.spacing(2)}`,
    },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    paddingInline: theme.spacing(dialogInlinePadding),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    '&.divider': { borderBottom: `1px solid ${colors.strokeGray}`, marginBottom: 16 },
}));

const StyledFooterBox = styled(Box)(({ theme }) => ({
    paddingBlock: theme.spacing(4.375),
    paddingInline: theme.spacing(dialogInlinePadding),
    backgroundColor: colors.ultraLightGray,
}));

const StyledFullscreenDialogContent = styled(DialogContent)({ display: 'flex', flexDirection: 'column' });

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    paddingInline: `${theme.spacing(dialogInlinePadding)} !important`,
    paddingBottom: theme.spacing(5),
}));

const StyledDialogActions = styled(DialogActions)({
    '&.verticalButtons': {
        display: 'grid',
        justifyContent: 'unset',
        rowGap: 2,
        '&>button': { mx: '0 !important' },
    },
});

export const createUseAppDialog =
    <T extends Record<string, unknown> = any>(Component: FC<T & { id: string }>) =>
    () =>
        useMemo(
            () =>
                [
                    (deps?: T) => {
                        return NiceModal.show(Component, deps);
                    },
                    () => NiceModal.hide(Component),
                ] as const,
            []
        );

export type AltAction = {
    label: string;
    handler?: () => Promise<any> | void;
} & AppButtonProps;

const AltActionButton = ({
    altAction,
    verticalButtons,
}: {
    altAction?: AltAction | ReactNode;
    verticalButtons?: true;
}) => {
    if (!altAction) return null;
    else if (isValidElement(altAction)) return altAction;
    else if (typeof altAction === 'object' && (altAction as AltAction).label) {
        const { handler, label, ...buttonProps } = altAction as AltAction;
        return (
            <AppButton
                fullWidth
                variant={verticalButtons ? 'primaryText' : 'primaryOutlined'}
                size="large"
                onClick={() => handler?.()}
                {...buttonProps}
            >
                {label}
            </AppButton>
        );
    } else return altAction as unknown as JSX.Element;
};

const getDialogPropsFromModal = (modal: NiceModalHandler, keepMounted?: boolean, argOnClose?: OnClose) => {
    const { onClose: _onClose, open } = muiDialog(modal);
    const onClose: OnClose = (e) => {
        _onClose();
        argOnClose?.(e);
    };

    const modalDialogProps = {
        onClose,
        open,
        TransitionProps: {
            onExited: () => {
                modal.resolveHide();
                !keepMounted && modal.remove();
            },
        },
    };

    return modalDialogProps;
};

const StyledDialog = styled(Dialog)({
    '& .paper': { padding: 0 },
});

export const AppDialog = ({
    id,
    title,
    subtitle,
    action,
    altAction,
    footer,
    error,
    divider,
    fullScreen,
    fullWidth,
    maxWidth,
    children,
    caption,
    classes,
    modal,
    keepMounted,
    onClose: _onClose,
    open,
    verticalButtons,
    ...rest
}: AppDialogProps) => {
    const modalDialogProps = modal
        ? getDialogPropsFromModal(modal, keepMounted, _onClose)
        : {
              onClose: _onClose,
              open: Boolean(open),
          };

    const fullScreenDialogChildren = (
        <>
            <Box
                role="heading"
                sx={{
                    pl: 2,
                    pr: 3,
                    py: 0.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexShrink: 0,
                    height: 72 /* 88px - (8 divider + 8 fullscreen paper padding top) */,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <DialogCloseButton onClose={modalDialogProps.onClose} fullScreen />
                    <DialogTitle id={id} sx={{ p: 0, display: 'flex', alignItems: 'baseline' }}>
                        <Box display="flex" flexDirection="column">
                            <Typography variant="h2">{title}</Typography>
                            {caption}
                        </Box>
                        {subtitle && (
                            <Typography variant="body2" m={0} ml={1}>
                                {subtitle}
                            </Typography>
                        )}
                    </DialogTitle>
                </Box>

                <StyledDialogActionBox>
                    <AltActionButton altAction={altAction} />
                    {action}
                </StyledDialogActionBox>
            </Box>
            <Divider />
            <StyledFullscreenDialogContent>{children}</StyledFullscreenDialogContent>
        </>
    );

    const dialogChildren = (
        <>
            <StyledDialogContent>
                {children}
                <ErrorText pt={2} mb={-2} error={error} center />
            </StyledDialogContent>
            {action && (
                <StyledDialogActions className={clsx({ verticalButtons })}>
                    {!verticalButtons && <AltActionButton altAction={altAction} />}
                    {action}
                    {verticalButtons && <AltActionButton altAction={altAction} verticalButtons />}
                </StyledDialogActions>
            )}
            {footer && (
                <StyledFooterBox pt={2} pb={action ? 1 : 3} px={3}>
                    {footer}
                </StyledFooterBox>
            )}
        </>
    );

    // show snackbar on fullscreen dialogs whenever error is supplied
    const snackbar = useSnackbar();
    useEffect(() => {
        if (fullScreen && error)
            snackbar?.enqueueSnackbar({ message: (error as { message: string })?.message ?? error, variant: 'error' });
    }, [fullScreen, error, snackbar]);

    return fullScreen ? (
        <Dialog {...modalDialogProps} fullScreen aria-labelledby={id} {...rest}>
            {fullScreenDialogChildren}
        </Dialog>
    ) : (
        <StyledDialog
            classes={{ ...classes, paper: clsx({ paper: true }, classes?.paper) }}
            {...modalDialogProps}
            aria-labelledby={id}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            {...rest}
        >
            <StyledDialogTitle className={clsx({ divider })} id={id}>
                <DialogCloseButton onClose={modalDialogProps.onClose} />
                <Typography variant="h2">{title}</Typography>
                {subtitle && (
                    <Typography pt={3} mb={-1}>
                        {subtitle}
                    </Typography>
                )}
            </StyledDialogTitle>
            {dialogChildren}
        </StyledDialog>
    );
};
