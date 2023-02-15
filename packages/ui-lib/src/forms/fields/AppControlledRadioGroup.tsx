import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import { Fragment } from 'react';
import { AppRadio } from '../../components/inputs';
import { GroupFieldProps, useGroupFieldStyles } from './HorizontalGroupLabel';

interface AppControlledRadioGroupProps extends GroupFieldProps {}

export const AppControlledRadioGroup = ({
    name,
    label,
    options,
    row,
    divider,
    ...props
}: AppControlledRadioGroupProps & RadioGroupProps) => {
    const styles = useGroupFieldStyles({ row, divider });
    return (
        <FormControl component="fieldset" color="primary" fullWidth>
            {label && <FormLabel component="legend">{label}</FormLabel>}
            <RadioGroup {...props} row={row} sx={styles} name={name}>
                {options.map((option) => (
                    <Fragment key={option.value}>
                        <FormControlLabel
                            value={option.value}
                            label={option.label as string}
                            disabled={option.disabled}
                            control={<AppRadio />}
                        />
                        {divider && <Divider />}
                    </Fragment>
                ))}
            </RadioGroup>
        </FormControl>
    );
};
