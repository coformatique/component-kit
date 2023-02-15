import { CloseIcon, colors, SearchIcon } from '..';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { RefObject, useCallback } from 'react';

const PREFIX = 'SearchPanelInput';

const classes = {
    root: `${PREFIX}-root`,
    contracted: `${PREFIX}-contracted`,
};

const StyledInput = styled(OutlinedInput)({
    [`&.${classes.root}`]: {
        marginLeft: 16,
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        height: 36,
        paddingLeft: 10,
        minWidth: 220,
        width: '100%',
        transition: `width ease-in-out 0.1s, min-width ease-in-out 0.1s, background-color ease-out 0.1s`,
    },
    [`&.${classes.contracted}`]: {
        transition: `width ease-in-out 0.1s, min-width ease-in-out 0s, background-color ease-in 0.1s`,
        cursor: 'pointer',
        width: 36,
        paddingLeft: 6,
        borderRadius: 5,
        minWidth: 0,
        backgroundColor: colors.ultraLightBlue,
        '&:hover': { border: 'none', backgroundColor: colors.lightBlue },
        '&>fieldset': { border: 'none', '&:hover': { border: 'none' } },
    },
});

export type SearchPanelInputProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    value?: string;
    onValueChange: (newValue: string) => void;
    placeholder?: string;
    inputRef?: RefObject<HTMLInputElement> | null | undefined;
    variant?: 'general' | 'filter';
} & Omit<OutlinedInputProps, 'variant'>;

export const SearchPanelInput = ({
    open,
    setOpen,
    value,
    onValueChange,
    inputRef,
    placeholder,
    variant = 'general',
    ...restProps
}: SearchPanelInputProps) => {
    const openInput = useCallback(() => {
        if (!open) {
            setOpen(true);
            inputRef?.current?.querySelector('input')?.focus();
        }
    }, [inputRef, open, setOpen]);

    return (
        <StyledInput
            className={clsx(classes.root, { [classes.contracted]: !open })}
            color="secondary"
            ref={inputRef}
            onChange={(e) => onValueChange(e.target.value)}
            value={value}
            type="text"
            onClick={openInput}
            onFocus={openInput}
            onBlur={() => !value && setOpen(false)}
            placeholder={!open ? undefined : placeholder}
            {...restProps}
            startAdornment={
                <InputAdornment position="start" onClick={() => setOpen(true)}>
                    <SearchIcon
                        sx={{ color: variant === 'filter' ? colors.warmGray : colors.blue }}
                        fontSize={variant === 'filter' ? 'medium' : 'large'}
                    />
                </InputAdornment>
            }
            {...(variant === 'general' && {
                endAdornment: !!open && value && (
                    <InputAdornment
                        position="end"
                        onClick={() => {
                            onValueChange('');
                            setOpen(false);
                        }}
                        sx={{ cursor: 'pointer' }}
                    >
                        <CloseIcon color="primary" fontSize="small" />
                    </InputAdornment>
                ),
            })}
        />
    );
};
