import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import colors from '../../theme/colors';

export const StatusCheckCompleteIcon = ({ active, ...props }: SvgIconProps & { active?: boolean }) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0Z"
      {...(active && { fill: colors.green })}
    />
    <path
      d="M10.5002 13.9409L15.9705 8.47062C16.2611 8.17531 16.7374 8.17774 17.0303 8.47024C17.3233 8.76274 17.3233 9.23759 17.0303 9.53056L11.0303 15.5306C10.884 15.6771 10.6924 15.7503 10.5002 15.7503C10.308 15.7503 10.1158 15.6753 9.96955 15.5309L6.96955 12.5309C6.67658 12.2384 6.67705 11.7636 6.96955 11.4706C7.26205 11.1776 7.7369 11.1776 8.02986 11.4706L10.5002 13.9409Z"
      fill="white"
    />
  </SvgIcon>
);
