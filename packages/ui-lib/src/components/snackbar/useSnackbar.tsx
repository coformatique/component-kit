import { OptionsObject as NotistackSnackbarOptions, useSnackbar as useNotistackSnackbar } from 'notistack';
import { useCallback, useMemo } from 'react';
import { AppSnackbarProps, Snackbar } from './Snackbar';

export type UseSnackbarProps = Omit<NotistackSnackbarOptions, 'variant'> & AppSnackbarProps;

export const useSnackbar = () => {
    const { enqueueSnackbar: notistackEnqueueSnackbar, closeSnackbar } = useNotistackSnackbar();

    const enqueueSnackbar = useCallback(
        ({
            message,
            autoHideDuration = 5000,
            closable,
            key,
            variant = 'success',
            icon = true,
            floating,
            secondaryButton,
            persist,
            ...rest
        }: UseSnackbarProps) =>
            notistackEnqueueSnackbar(undefined, {
                autoHideDuration,
                persist: closable || !!secondaryButton || persist,
                preventDuplicate: true,
                key,
                content: (key) => (
                    <Snackbar
                        {...{ closeSnackbar, message, icon, closable, floating, secondaryButton, variant }}
                        snackbarKey={key}
                    />
                ),
                ...rest,
            }),
        [closeSnackbar, notistackEnqueueSnackbar]
    );

    return useMemo(() => ({ enqueueSnackbar, closeSnackbar }), [closeSnackbar, enqueueSnackbar]);
};
