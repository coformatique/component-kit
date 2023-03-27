import { AppIconButton } from '../..';
import { SyntheticEvent } from 'react';
import { CloseIcon } from '../../icons';

export interface DialogCloseButtonProps {
  onClose?: (e: SyntheticEvent) => void;
  fullScreen?: boolean;
}

export const DialogCloseButton = ({ onClose, fullScreen = false }: DialogCloseButtonProps) => (
  <AppIconButton
    sx={{ ...(fullScreen ? { mr: 2 } : { position: 'absolute', top: 6, right: 6 }) }}
    onClick={onClose}
    size="large"
  >
    <CloseIcon />
  </AppIconButton>
);
