import { AppIconButton } from '..';
import Menu from '@mui/material/Menu';
import { FC, MouseEvent, ReactNode, useState } from 'react';
import { ActionMenuIcon } from '../icons';

export const ContextMenu: FC<{ children?: ReactNode }> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <AppIconButton size="small" onClick={handleClick}>
        <ActionMenuIcon />
      </AppIconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={10}
        PaperProps={{ square: true }}
        onClick={handleClose}
      >
        {children}
      </Menu>
    </>
  );
};
