import { styled } from '@mui/material';
import MuiTooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { Box } from '@mui/system';
import colors from '../../theme/colors';

const errorTooltipStyles = {
  [`& .${tooltipClasses.tooltip}`]: { backgroundColor: colors.red },
  [`& .${tooltipClasses.arrow}`]: { color: colors.red },
};

const ErrorTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={Object.assign({ popper: className }, props.classes)} />
))(errorTooltipStyles);

const blackTooltipStyles = {
  [`& .${tooltipClasses.tooltip}`]: { backgroundColor: 'black' },
  [`& .${tooltipClasses.arrow}`]: { color: 'black' },
};

const BlackTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={Object.assign({ popper: className }, props.classes)} />
))(blackTooltipStyles);

export type AppTooltipProps = TooltipProps & {
  error?: boolean;
  black?: boolean;
  maxWidth?: boolean;
  disableWrapper?: boolean;
  minWidthUnset?: boolean;
};

export const AppTooltip = ({
  error,
  black,
  children,
  maxWidth = true,
  placement = 'top',
  disableWrapper = false,
  minWidthUnset = false,
  ...tooltipProps
}: AppTooltipProps) => {
  const Tooltip = black ? BlackTooltip : error ? ErrorTooltip : MuiTooltip;
  return (
    <Tooltip
      arrow
      placement={placement}
      PopperProps={{ sx: { maxWidth: maxWidth ? 200 : 'unset' } }}
      componentsProps={{ tooltip: { sx: minWidthUnset ? { minWidth: 'unset' } : undefined } }}
      {...tooltipProps}
    >
      {disableWrapper ? (
        children
      ) : (
        <Box component="span" width="fit-content">
          {children}
        </Box>
      )}
    </Tooltip>
  );
};
