import { alpha } from '@mui/material';
import colors from './colors';

export const LOGO = '';

export const BORDER_RADIUS = 10;
export const BORDER_RADIUS_SM = 5;
export const BORDER_RADIUS_LG = 15;

export const DIALOG_WIDTH_DEFAULT = 540;

export const DEFAULT_FONT = 'ESRebondGrotesque-Regular';
export const FONT_MEDIUM = 'ESRebondGrotesque-Medium';
export const FONT_BOLD = 'ESRebondGrotesque-Bold';
export const CHART_FONT = 'ESRebondGrotesque-Regular';
export const CHART_FONT_BOLD = 'ESRebondGrotesque-SemiBold';

export const HEADER_HEIGHT = 68;
export const HEADER_HEIGHT_MOBILE = 60;
export const APP_FILTER_BAR_HEIGHT = 48;
export const FOOTER_HEIGHT = 50;

export const CARD_HEIGHT_DEFAULT = 320;

export const screenHeight = (mobile: boolean = false) =>
  `calc(100vh - ${(mobile ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT) + FOOTER_HEIGHT}px)`;
export const calculatedHeight = (factor: number) => `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT + factor}px)`;

export const iconButtonDiameters = { large: 32, small: 24 } as const;

export const boxShadows = {
  tile: `0px 1px 3px 0px ${alpha(colors.black, 0.15)}`,
  dropdown: `0px 1px 6px 0px ${alpha(colors.black, 0.25)}`,
  modal: `0px 1px 20px 0px ${alpha(colors.black, 0.25)}`,
  banner: `0px 1px 20px 0px ${alpha(colors.black, 0.15)}`,
};
