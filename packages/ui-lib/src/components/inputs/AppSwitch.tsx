import Switch, { switchClasses, SwitchProps } from '@mui/material/Switch';
import colors from '../../theme/colors.module.scss';

export const AppSwitch = (props: SwitchProps) => {
    const small = props.size === 'small';
    return (
        <Switch
            {...props}
            color="primary"
            disableRipple
            sx={{
                [`&.${switchClasses.root}`]: {
                    width: small ? 30 : 48,
                    height: small ? 16 : 26,
                    padding: 0,
                },
                [`& .${switchClasses.switchBase}`]: {
                    padding: 0,
                    [`&.${switchClasses.checked}`]: { transform: small ? 'translateX(14px)' : 'translateX(22px)' },
                },
                [`& .${switchClasses.thumb}`]: {
                    width: small ? 12 : 20,
                    height: small ? 12 : 20,
                    marginTop: small ? '2px' : '3px',
                    marginLeft: small ? '2px' : '3px',
                    backgroundColor: 'white',
                },
                [`& .${switchClasses.track}`]: {
                    borderRadius: 15,
                    backgroundColor: props.disabled
                        ? props.checked
                            ? `${colors.lightBlue} !important`
                            : colors.lightGray
                        : colors.mediumGray,
                    opacity: '1 !important',
                },
            }}
        />
    );
};
