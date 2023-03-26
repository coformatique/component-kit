import { useState, ReactNode } from 'react';
import { AppButton, AppButtonProps } from './AppButton';

type AppHoverButtonProps = AppButtonProps & {
  hoverText: string;
  hoverStartIcon: ReactNode;
};

export const AppHoverButton = ({ hoverText, startIcon, hoverStartIcon, ...props }: AppHoverButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <AppButton
      {...props}
      startIcon={hover ? hoverStartIcon : startIcon}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? hoverText : props.children}
    </AppButton>
  );
};
