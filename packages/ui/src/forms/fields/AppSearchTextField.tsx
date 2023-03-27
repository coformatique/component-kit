import { AppIconButton } from '../..';
import { InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { PropsWithChildren } from 'react';
import { CloseIcon, SearchIcon } from '../../icons';

const textFieldStyles = { width: '100%' };

interface InputProps {
  /** Specifies the search value. */
  value: string;
  /** Handles the search value changes. */
  onValueChange: (value: string) => void;
  /** Returns a specified localization message. */
  getMessage: (messageKey: string) => string;
}

interface AppSearchTextFieldProps extends PropsWithChildren<InputProps> {
  onKeyDown?: (e: any) => void;
  placeholder?: string;
  onClose?: () => void;
  autoFocus?: boolean;
}

export const AppSearchTextField = ({
  value,
  onValueChange,
  placeholder,
  onClose,
  onKeyDown,
  autoFocus,
}: AppSearchTextFieldProps) => {
  return (
    <Box display="flex" justifyContent="flex-start" width="100%" alignItems="center">
      <TextField
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        value={value}
        onChange={e => onValueChange(e.target.value)}
        placeholder={placeholder || 'Search'}
        sx={textFieldStyles}
        onKeyDown={(e: any) => onKeyDown && onKeyDown(e)}
        autoFocus={autoFocus}
      />
      {onClose && (
        <AppIconButton onClick={onClose}>
          <CloseIcon />
        </AppIconButton>
      )}
    </Box>
  );
};
