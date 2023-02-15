import { SwitchProps } from '@mui/material';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import { useFormContext } from 'react-hook-form';
import { AppSwitch } from '../../components/inputs';
import { AppFormField } from '../AppForm';

export const AppToggleField = ({
    name,
    onChange,
    switchProps,
    ...props
}: AppFormField & Omit<FormControlLabelProps, 'control'> & { switchProps?: SwitchProps }) => {
    const {
        register,
        watch,
        setValue,
        control: {
            _options: { mode },
        },
    } = useFormContext();
    const value = watch(name);
    const fieldProps = register(name);
    return (
        <FormControlLabel
            control={
                <AppSwitch
                    {...fieldProps}
                    onChange={(e) => {
                        setValue(name, e.target.checked, {
                            shouldDirty: true,
                            shouldTouch: true,
                            shouldValidate: mode !== 'onSubmit',
                        });
                        onChange && onChange(e, e.target.checked);
                    }}
                    checked={Boolean(value)}
                    {...switchProps}
                />
            }
            {...props}
        />
    );
};
