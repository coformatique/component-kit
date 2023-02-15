import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent, ReactNode } from 'react';

interface ToggleButtonProps {
    btn1: ReactNode;
    btn2: ReactNode;
    value: boolean;
    onChange: (value: boolean) => void;
}

export const AppToggleButton = ({ btn1, btn2, value, onChange }: ToggleButtonProps) => {
    const handleToggle = (event: MouseEvent<HTMLElement>, eValue: boolean) => {
        onChange(eValue);
    };

    return (
        <ToggleButtonGroup value={value} exclusive onChange={handleToggle}>
            <ToggleButton disableRipple value={true} selected={value}>
                {btn1}
            </ToggleButton>
            <ToggleButton disableRipple value={false} selected={!value}>
                {btn2}
            </ToggleButton>
        </ToggleButtonGroup>
    );
};
