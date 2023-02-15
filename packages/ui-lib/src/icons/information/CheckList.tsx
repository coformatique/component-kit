import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import colors from '../../theme/colors.module.scss';

export const CheckListIcon = (props: SvgIconProps) => (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            d="M19.0504 5.10002H16.8615C16.3245 3.53065 14.8945 2.40002 13.2004 2.40002C11.5063 2.40002 10.0763 3.53065 9.54008 5.10002H7.35039C6.27383 5.10002 5.40039 6.00621 5.40039 7.12502V21.975C5.40039 23.093 6.27383 24 7.35039 24H19.0504C20.127 24 21.0004 23.0938 21.0004 21.975V7.12502C21.0004 6.00621 20.127 5.10002 19.0504 5.10002Z"
            fill={colors.green}
        />
        <path
            d="M7.2 6.75H15.6C16.3731 6.75 17 6.14545 17 5.4V4.7925C17 3.63698 16.0287 2.7 14.83 2.7C14.4669 1.15931 13.0931 0 11.4 0C9.70687 0 8.29375 1.15931 7.97 2.7C6.77169 2.7 5.8 3.63698 5.8 4.7925V5.4C5.8 6.14672 6.42694 6.75 7.2 6.75ZM6.5 4.7925C6.5 4.00992 7.15844 3.375 7.97 3.375H8.54225L8.62297 2.99147C8.84111 1.95535 9.59728 1.04368 10.6565 0.770302C12.2722 0.353447 13.831 1.35375 14.1429 2.83454L14.2569 3.375H14.8291C15.6044 3.375 16.3 4.00992 16.3 4.7925V5.4C16.3 5.77281 15.9866 6.075 15.6 6.075H7.2C6.81325 6.075 6.5 5.77125 6.5 5.4V4.7925ZM11.4 4.05C11.7866 4.05 12.1 3.74777 12.1 3.375C12.1 3.00206 11.785 2.7 11.4 2.7C11.015 2.7 10.7 3.00206 10.7 3.375C10.7 3.74794 11.015 4.05 11.4 4.05ZM16.65 10.4625H11.75C11.5575 10.4625 11.4 10.6144 11.4 10.8C11.4 10.9856 11.5572 11.1375 11.75 11.1375H16.65C16.8425 11.1375 17 10.9856 17 10.8C17 10.6144 16.8425 10.4625 16.65 10.4625ZM6.5 16.2C6.5 16.5728 6.81342 16.875 7.2 16.875C7.58657 16.875 7.9 16.5728 7.9 16.2C7.9 15.8271 7.58657 15.525 7.2 15.525C6.81342 15.525 6.5 15.8287 6.5 16.2ZM18.54 4.21875C18.3609 4.14623 18.1572 4.22139 18.0793 4.39408C18.0027 4.56414 18.0834 4.76322 18.2611 4.83832C18.7719 5.05406 19.1 5.53922 19.1 6.075V19.575C19.1 20.32 18.4726 20.925 17.7 20.925H5.1C4.32737 20.925 3.7 20.32 3.7 19.575V6.075C3.7 5.53964 4.02948 5.05448 4.54087 4.83848C4.71723 4.76466 4.79791 4.56557 4.71999 4.39425C4.64325 4.22297 4.44112 4.14366 4.25912 4.22297C3.49481 4.54359 3 5.23547 3 6.075V19.575C3 20.693 3.94194 21.6 5.1 21.6H17.7C18.8581 21.6 19.8 20.6917 19.8 19.575V6.075C19.8 5.26922 19.3056 4.53937 18.54 4.21875ZM16.65 15.8625H10.35C10.1575 15.8625 10 16.0144 10 16.2C10 16.3856 10.1572 16.5375 10.35 16.5375H16.65C16.8428 16.5375 17 16.3866 17 16.2C17 16.0134 16.8425 15.8625 16.65 15.8625ZM6.95237 12.3905C7.02106 12.4537 7.10987 12.4875 7.2 12.4875C7.29012 12.4875 7.37911 12.4545 7.44745 12.3886L10.2474 9.68861C10.3842 9.55678 10.3842 9.34318 10.2474 9.21147C10.1107 9.07976 9.88922 9.07963 9.75264 9.21147L7.2 11.6733L6.04763 10.5595C5.91091 10.4277 5.6894 10.4277 5.55281 10.5595C5.41622 10.6914 5.41609 10.905 5.55281 11.0367L6.95237 12.3905Z"
            fill="black"
        />
    </SvgIcon>
);
