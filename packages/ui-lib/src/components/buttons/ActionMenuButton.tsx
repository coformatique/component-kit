import { alpha, styled } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FC, MouseEvent, useState } from 'react';
import colors from '../../theme/colors.module.scss';
import { AppButton, AppButtonProps } from './AppButton';

const StyledAppButton = styled(AppButton)({
    '& .containedSizeSmall': {
        backgroundColor: alpha(colors.blue, 0.05),
        '&:hover': {
            backgroundColor: alpha(colors.blue, 0.15),
        },
    },
    '& .containedSizeLarge': {
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    '& .disabled': {
        '& .MuiButton-label': {
            color: colors.darkGray,
        },
    },
});

export type ActionMenuButtonProps = AppButtonProps & {
    items: { name: string; action: () => void; disabled?: boolean }[];
};

export const ActionMenuButton: FC<ActionMenuButtonProps> = ({ children, ...props }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <StyledAppButton size="small" onClick={handleClick} {...props}>
                {children}
            </StyledAppButton>
            <Menu
                id="customized-menu"
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                {props.items.map((e) => (
                    <MenuItem
                        onClick={() => {
                            e.action();
                            handleClose();
                        }}
                        disabled={e.disabled}
                        key={e.name}
                    >
                        {e.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};
