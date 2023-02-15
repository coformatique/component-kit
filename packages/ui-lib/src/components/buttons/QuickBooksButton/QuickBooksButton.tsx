import { styled } from '@mui/material';
import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
// @ts-ignore disappearing svg import error
import QB from './qb_med.svg';
// @ts-ignore disappearing svg import error
import QBHover from './qb_med_hover.svg';

const StyledButton = styled('button')({
    '&.medium': { width: '223px', height: '36px' },
    '&.large': { width: '274px', height: '48px' },
    '&.root': {
        backgroundColor: 'transparent',
        backgroundImage: `url(${QB})`,
        backgroundSize: '100% 100%',
        border: 0,
        padding: '8px 15px',
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
            backgroundImage: `url(${QBHover})`,
        },
    },
});

export const QuickBooksButton = ({
    size,
    ...props
}: { size: 'medium' | 'large' } & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return <StyledButton className={clsx('root', size === 'medium' ? 'medium' : 'large')} {...props} />;
};
