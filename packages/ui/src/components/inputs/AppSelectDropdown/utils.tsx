import { FilledTextFieldProps, PopoverProps, styled, TextField } from '@mui/material';
import { LIST_MAX_WIDTH } from './DropdownList';

export const StyledTextField = styled(TextField)({
  // minWidth: 260,
});

export const defaultDropdownSelectFieldProps: Partial<FilledTextFieldProps> = {
  'aria-describedby': 'multi-select-filter-list-search',
  variant: 'filled',
  autoComplete: 'off',
  fullWidth: true,
  margin: 'dense',
};

export const defaultDropdownSelectPopoverProps: Partial<PopoverProps> = {
  elevation: 1,
  disableAutoFocus: true,
  disableEnforceFocus: true,
  disableRestoreFocus: true,
  PaperProps: { square: true },
  anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
  transformOrigin: { vertical: 'top', horizontal: 'center' },
  sx: { '& .MuiPaper-root': { marginTop: 1, maxWidth: LIST_MAX_WIDTH } },
};

export const compactChipStyles = { maxWidth: '192px' } as const;
