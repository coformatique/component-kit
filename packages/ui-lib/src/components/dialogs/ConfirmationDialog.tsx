import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Dispatch, PropsWithChildren, ReactNode, SetStateAction, useCallback, useMemo, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { AppButtonProps } from '../buttons';
import { AppButton } from '../buttons/AppButton';
import { AppDialog, AppDialogProps } from './AppDialog';

interface ConfirmationDialogProps<State extends any> extends Omit<AppDialogProps, 'title' | 'modal' | 'action'> {
    title?: ReactNode;
    confirm?: string;
    cancel?: string;
    state?: State;
    setState?: Dispatch<SetStateAction<State>>;
    onConfirm: (state?: State) => Promise<any> | void;
    onCancel?: (state?: State) => void;
    context?: UseFormReturn<any, any>;
    action?: Partial<AppButtonProps>;
}

export type UseConfirmationDialogProps<State extends any> = {
    content?: (state: State, context?: UseFormReturn<any>) => ReactNode;
} & ConfirmationDialogProps<State>;

export interface DefaultConfirmationDialogState<Payload extends any = any> {
    id: number | string | number[];
    payload: Payload;
}

export const useConfirmationDialog = <State extends any = DefaultConfirmationDialogState>({
    content,
    state: initialState,
    ...props
}: UseConfirmationDialogProps<State>) => {
    const [_state, setState] = useState<State>(initialState!);

    const show = useCallback(
        (callArgs?: Partial<UseConfirmationDialogProps<State>>) => {
            const state = callArgs?.state || _state;
            return NiceModal.show(ConfirmationDialog, {
                children: content?.(state, callArgs?.context),
                state,
                setState,
                ...props,
                ...callArgs,
            });
        },
        [_state, content, props]
    );

    return useMemo(() => [show, setState] as const, [show]);
};

const ConfirmationDialog = NiceModal.create((allProps) => {
    const {
        title = '',
        subtitle,
        confirm = 'OK',
        cancel = 'Cancel',
        children,
        state,
        setState,
        onConfirm,
        onCancel,
        action,
        ...props
    } = allProps as unknown as PropsWithChildren<ConfirmationDialogProps<any>> & { modal: AppDialogProps['modal'] };

    const [loading, setLoading] = useState(false);
    const modal = useModal();

    const hideModal = () => {
        modal.hide();
        setLoading(false);
    };

    const handleConfirm = () => {
        setLoading(true);
        const promise = onConfirm(state);
        if ((promise as Promise<any>).then) (promise as Promise<any>).then(hideModal);
        else hideModal();
    };

    const handleCancel = () => {
        onCancel?.(state);
        modal.hide();
    };

    return (
        <AppDialog
            title={title}
            subtitle={subtitle}
            action={
                <AppButton variant="dangerContained" fullWidth onClick={handleConfirm} loading={loading} {...action}>
                    {confirm}
                </AppButton>
            }
            altAction={{ label: cancel, handler: handleCancel }}
            maxWidth={false}
            fullWidth
            children={typeof children === 'function' ? (children as Function)(state, setState) : children}
            {...props}
            modal={modal}
        />
    );
});
