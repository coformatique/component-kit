import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import colors from '../../theme/colors.module.scss';

export const StatusCheckErrorIcon = (props: SvgIconProps) => (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            d="M12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0Z"
            fill={colors.red}
        />
        <path
            d="M12 14.25C12.4146 14.25 12.75 13.9146 12.75 13.5V6C12.75 5.58544 12.4146 5.25 12 5.25C11.5854 5.25 11.25 5.5875 11.25 6V13.5C11.25 13.9125 11.5875 14.25 12 14.25ZM12 16.125C11.3789 16.125 10.875 16.6289 10.875 17.25C10.875 17.8711 11.3789 18.375 12 18.375C12.6211 18.375 13.125 17.8711 13.125 17.25C13.125 16.6289 12.6234 16.125 12 16.125Z"
            fill="white"
        />
    </SvgIcon>
);
