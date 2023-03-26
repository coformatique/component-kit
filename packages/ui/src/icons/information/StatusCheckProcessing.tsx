import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import colors from '../../theme/colors';

export const StatusCheckProcessingIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="12" fill={colors.yellow} />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 6.75C10.4859 6.75 9.1225 7.38996 8.16335 8.41631C7.28597 9.35517 6.75 10.6142 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75C5.58579 12.75 5.25 12.4142 5.25 12C5.25 10.2191 5.9407 8.5978 7.06742 7.39213C8.29835 6.07495 10.0534 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 15.7279 15.7279 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C14.8995 17.25 17.25 14.8995 17.25 12C17.25 9.1005 14.8995 6.75 12 6.75Z"
      fill="white"
    />
  </SvgIcon>
);
