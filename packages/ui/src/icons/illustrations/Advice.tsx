import { SVGProps } from 'react';
import colors from '../../theme/colors';

export const AdviceIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path
      d="M37 51.75C22.397 56.75 6 45.9712 6 31.6122C6 17.2522 17.641 7 32 7C46.359 7 58 18.64 58 33C58 47.359 41.3197 59.3377 27 55.5"
      stroke={colors.darkGray}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M29.3896 22.5586H34.6396L34.2196 34.7676H29.8396L29.3896 22.5586ZM35.0293 39.3576C35.0293 41.0076 33.7393 42.2976 31.9993 42.2976C30.2893 42.2976 29.0293 41.0076 29.0293 39.3576C29.0293 37.7076 30.2893 36.4176 31.9993 36.4176C33.7393 36.4176 35.0293 37.7076 35.0293 39.3576V39.3576Z"
      fill={colors.darkGray}
    />
  </svg>
);
