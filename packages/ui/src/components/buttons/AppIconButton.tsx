import { IconButton, IconButtonProps, styled } from '@mui/material';
import clsx from 'clsx';
import { ComponentType, forwardRef, SVGProps } from 'react';
import colors from '../../theme/colors';
import { boxShadows } from '../../theme/consts';

export const appIconButtonVariants = ['default', 'floating', 'background'] as const;

export type AppIconButtonVariant = typeof appIconButtonVariants[number];

export type AppIconButtonProps = Omit<IconButtonProps, 'color'> & {
  variant?: AppIconButtonVariant;
  loading?: boolean;
};

const CommonStylesIconButton = styled(IconButton)({
  '&:focus': {
    outline: '1px dashed black',
    color: colors.blue,
    background: 'white',
  },
  '&:active': {
    color: `${colors.ultraLightBlue} !important`,
    background: '#DFD9F0 !important',
    outline: 'none !important',
  },
  '&:hover': {
    color: colors.blue,
  },
  '&.loading': {
    color: `${colors.ultraLightBlue} !important`,
    background: 'white !important',
  },
});

const AppDefaultIconButton = styled(CommonStylesIconButton)({
  color: colors.darkGray,
  '&:hover': {
    background: colors.lightBlue,
  },
  '&.Mui-disabled': {
    color: colors.strokeGray,
  },
});

const AppFloatingIconButton = styled(CommonStylesIconButton)({
  background: 'white',
  boxShadow: boxShadows.tile,
  color: colors.darkGray,
  '&:hover': {
    boxShadow: boxShadows.dropdown,
    background: 'white',
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:focus': {
    background: 'white',
  },
  '&.Mui-disabled': {
    color: colors.strokeGray,
  },
});

const AppBackgroundIconButton = styled(CommonStylesIconButton)({
  color: colors.blue,
  background: colors.ultraLightBlue,
  '&:focus': {
    background: colors.ultraLightBlue,
  },
  '&:hover': {
    background: colors.lightBlue,
  },
  '&.Mui-disabled': {
    background: colors.lightGray,
    color: colors.warmGray,
  },
  '&.loading': {
    background: `${colors.ultraLightBlue} !important`,
    color: 'white !important',
  },
});

const iconButtonVariantComponentMap: Record<AppIconButtonVariant, typeof AppDefaultIconButton> = {
  default: AppDefaultIconButton,
  background: AppBackgroundIconButton,
  floating: AppFloatingIconButton,
};

export const AppIconButton: ComponentType<AppIconButtonProps> = forwardRef(
  ({ variant = 'default', loading, ...props }: AppIconButtonProps, ref: any) => {
    const IconButtonComponent = iconButtonVariantComponentMap[variant];
    return (
      <IconButtonComponent
        {...props}
        ref={ref}
        disabled={props.disabled || loading}
        className={clsx(props.className, { loading })}
        children={loading ? <Spinner /> : props.children}
      />
    );
  },
);

const Spinner = styled((props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" {...props}>
    <path d="M 9 17 A 8 8 180 1 0 1 9" fill="none" stroke="currentColor" strokeWidth={2} />
  </svg>
))({
  animation: 'spin linear infinite 0.7s',
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});
