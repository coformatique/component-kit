import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { Box } from '@mui/material';
import React from 'react';
import { forwardRef, ReactNode } from 'react';
import { ErrorText } from '../ErrorText';

export const appButtonVariants = [
  'primaryContained',
  'primaryOutlined',
  'primaryContainedLight',
  'primaryText',
  'dangerContained',
  'dangerOutlined',
  'dangerContainedLight',
  'dangerText',
  'successContained',
] as const;

export type AppButtonVariant = typeof appButtonVariants[number];

export type AppButtonVariantOverrides = {
  [T in AppButtonVariant]: true;
};

type AppButtonPropsWithoutLink = Omit<
  LoadingButtonProps,
  // disable overriding these props
  'loadingPosition' | 'loadingIndicator' | 'color' | 'variant'
> & {
  variant?: AppButtonVariant;
  size?: 'small' | 'large';
  center?: boolean;
  error?: string | false;
  inline?: boolean;
  noPadding?: boolean;
  loadingText?: ReactNode;
};

type AppButtonPropsWithLink = AppButtonPropsWithoutLink & {
  to: string;
  component: any;
  target: string;
  rel?: string;
  href?: string;
};

export type AppButtonProps = AppButtonPropsWithoutLink | AppButtonPropsWithLink;

const loadingWords: Record<string, string> = { Submit: 'Submitting' };

const getLoadingText = (text: ReactNode) => {
  if (typeof text === 'string')
    return text.split(' ').length > 1
      ? text // "Sync Quickbooks" e.g. stays as is
      : text.endsWith('e')
      ? text.slice(0, -1) + 'ing' // "Delete" -> "Deleting"
      : loadingWords[text] ?? text + 'ing';
  else return text;
};

export const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ children, center, error, inline, noPadding, loadingText, sx, ...props }, ref) => {
    const button = (
      <LoadingButton
        ref={ref}
        {...((props.loading || props.startIcon) && { loadingPosition: 'start' })}
        {...(inline && { size: 'small', variant: 'primaryText' })}
        {...props}
        sx={{
          ...(!props.fullWidth && { width: 'max-content' }),
          ...(inline && { py: 0, px: 0.5, height: 'fit-content', verticalAlign: 'baseline' }),
          ...(noPadding && { p: 0 }),

          maxWidth: '100%',
          textAlign: 'start',

          ...sx,
        }}
      >
        {props.loading ? loadingText ?? getLoadingText(children) : children}
        {props.loading && '...'}
      </LoadingButton>
    );

    return center || error ? (
      <Box sx={{ ...(center && { margin: 'auto' }), width: props.fullWidth ? '100%' : 'max-content' }}>
        {button}
        <ErrorText indent error={error} mt={0.25} />
      </Box>
    ) : (
      button
    );
  },
);
