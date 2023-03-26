import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const UnfavoriteIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3533 9.75L12.0004 2.35793L9.65205 9.75H2.22036L8.31395 14.4914L5.97516 21.8331L12 17.1502L18.0264 21.8343L15.686 14.4916L21.7783 9.75H14.3533ZM10.9266 0.78375C11.0766 0.317062 11.5125 0 12 0C12.4922 0 12.9234 0.317062 13.0734 0.78375L15.45 8.25H22.875C23.3578 8.25 23.7844 8.55469 23.9391 9.00937C24.0938 9.46406 23.9438 9.96562 23.5641 10.2609L17.4328 15.0328L19.8234 22.5328C19.9734 23.0016 19.8 23.5172 19.3922 23.7984C18.9891 24.0797 18.45 24.0656 18.0609 23.7609L12 19.05L5.93907 23.7609C5.55001 24.0656 5.01094 24.0797 4.60641 23.7984C4.20235 23.5172 4.02844 23.0016 4.17798 22.5328L6.56719 15.0328L0.434398 10.2609C0.0550389 9.96562 -0.095008 9.46406 0.0609452 9.00937C0.216945 8.55469 0.644539 8.25 1.12501 8.25H8.5547L10.9266 0.78375Z"
        fill={props.fill}
      />
    </SvgIcon>
  );
};