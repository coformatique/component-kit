import { SnackbarProvider, SnackbarProviderProps } from 'notistack';
import { FC, ReactNode } from 'react';

export const AppSnackbarProvider: FC<{ children?: ReactNode } & SnackbarProviderProps> = ({ children, ...rest }) => (
  <SnackbarProvider
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    {...rest}
  >
    {children}
  </SnackbarProvider>
);
