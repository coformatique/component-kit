import Radio, { RadioProps } from '@mui/material/Radio';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import colors from '../../theme/colors';

const RadioIconLarge = (props: SvgIconProps) => (
  <SvgIcon {...props} fontSize="large" viewBox="0 0 26 26" fill="none">
    <rect x="0.5" y="0.5" width="25" height="25" rx="12.5" stroke={colors.strokeGray} fill="white" />
  </SvgIcon>
);

const RadioIconCheckedLarge = (props: SvgIconProps) => (
  <SvgIcon {...props} fontSize="large" viewBox="0 0 26 26" fill="none">
    <rect width="26" height="26" rx="13" />
    <rect x="10" y="10" width="6" height="6" rx="3" fill="white" />
  </SvgIcon>
);

const RadioIconSmall = (props: SvgIconProps) => (
  <SvgIcon {...props} fontSize="medium" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="9.5" stroke={colors.strokeGray} fill="white" />
  </SvgIcon>
);

const RadioIconCheckedSmall = (props: SvgIconProps) => (
  <SvgIcon {...props} fontSize="medium" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="9.5" stroke={colors.strokeGray} fill="white" />
    <circle cx="10" cy="10" r="7" fill={colors.blue} />
  </SvgIcon>
);

export const AppRadio = ({ size = 'medium', ...props }: Omit<RadioProps, 'color'>) => {
  const RadioIcon = size === 'medium' ? RadioIconLarge : RadioIconSmall;
  const RadioIconChecked = size === 'medium' ? RadioIconCheckedLarge : RadioIconCheckedSmall;

  return (
    <Radio
      sx={{
        height: size === 'medium' ? 32 : 20,
        width: size === 'medium' ? 32 : 20,
        '&:hover': { background: 'unset' },
        ...(size === 'medium' && {
          '&:not(.Mui-checked)': {
            '&:focus, &:hover': { '& > svg > rect:first-child': { stroke: colors.blue } },
          },
          '&.Mui-disabled.Mui-checked': { '& > svg > rect:first-child': { fill: colors.strokeGray } },
          '&.Mui-checked:hover': { '& > svg > rect:first-child': { fill: colors.lightBlue } },
          '&:focus': { background: colors.lightBlue },
        }),
        ...(size === 'small' && {
          '&.Mui-checked': {
            '&:hover': { '& > svg > circle:last-child': { fill: colors.lightBlue } },
            '&:focus, &:hover': { '& > svg > circle:first-child': { stroke: colors.strokeGray } },
          },
          '&:not(.Mui-checked)': {
            '&:focus, &:hover': { '& > svg > circle:first-child': { stroke: colors.blue } },
          },
        }),
      }}
      icon={<RadioIcon />}
      checkedIcon={<RadioIconChecked />}
      {...props}
    />
  );
};
