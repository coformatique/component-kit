import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import colors from '../../theme/colors';

const CbIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <rect width="23" height="23" x=".5" y=".5" fill="none" fillRule="evenodd" stroke={colors.warmGray} rx="3" />
  </SvgIcon>
);

const CbIconChecked = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <rect width="24" height="24" fill="currentColor" rx="3" />
      <path
        fill="white"
        d="M18.293 5.133a.398.398 0 01.594 0l.99 1.071a.481.481 0 010 .643L9.386 18.2a.398.398 0 01-.594 0l-4.669-5.052a.481.481 0 010-.643l.99-1.07a.398.398 0 01.594 0l3.382 3.66 9.204-9.962z"
      />
    </g>
  </SvgIcon>
);

const styles = {
  root: {
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
  },
  icon: {
    margin: '3px',
  },
};

export const AppCheckbox = ({ color = 'primary', size = 'medium', ...props }: CheckboxProps) => {
  return (
    <Checkbox
      sx={size === 'small' ? styles.root : undefined}
      color={color}
      icon={
        <CbIcon fontSize={size === 'medium' ? 'large' : 'medium'} sx={size === 'small' ? styles.icon : undefined} />
      }
      checkedIcon={
        <CbIconChecked
          fontSize={size === 'medium' ? 'large' : 'medium'}
          sx={size === 'small' ? styles.icon : undefined}
        />
      }
      {...props}
    />
  );
};
