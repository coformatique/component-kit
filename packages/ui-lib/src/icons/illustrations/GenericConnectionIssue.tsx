import { SVGProps } from 'react';
import colors from '../../theme/colors.module.scss';

export const GenericConnectionIssueIllustration = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 102 82" fill="none" {...props}>
        <path d="M1.48544 11.3703H100.515" stroke={colors.mediumGray} stroke-linecap="square" stroke-dasharray="4 5" />
        <path d="M1.48544 21.247H100.515" stroke={colors.mediumGray} stroke-linecap="square" stroke-dasharray="4 5" />
        <path d="M1.48544 31.1235H100.515" stroke={colors.mediumGray} stroke-linecap="square" stroke-dasharray="4 5" />
        <path d="M1.48544 40.9999H100.515" stroke={colors.mediumGray} stroke-linecap="square" stroke-dasharray="4 5" />
        <path d="M1.48544 50.8766H100.515" stroke={colors.mediumGray} stroke-linecap="square" stroke-dasharray="4 5" />
        <path d="M1.48544 60.7531H100.515" stroke={colors.mediumGray} stroke-linecap="square" stroke-dasharray="4 5" />
        <path d="M1.48544 70.6296H100.515" stroke={colors.mediumGray} stroke-linecap="square" stroke-dasharray="4 5" />
        <path d="M1.48544 80.5063H100.515" stroke={colors.mediumGray} stroke-linecap="square" stroke-dasharray="4 5" />
        <path d="M1.48544 1.49383H100.515" stroke={colors.mediumGray} stroke-linecap="square" stroke-dasharray="4 5" />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.2416 67C49.0291 67 49.7791 66.5874 50.1916 65.875L66.6916 37.375C67.5635 35.8843 66.4853 34 64.751 34H53.9322L57.926 21.8313C58.301 20.4062 57.2229 19 55.751 19H42.251C41.126 19 40.1697 19.8344 40.0197 20.95L37.0197 43.45C36.8416 44.8 37.8916 46 39.251 46H50.3791L46.0572 64.2343C45.7197 65.6594 46.8072 67 48.2416 67Z"
            fill={colors.strokeGray}
        />
        <path
            d="M45.2416 64C46.0291 64 46.7791 63.5874 47.1916 62.875L63.6916 34.375C64.5635 32.8843 63.4853 31 61.751 31H50.9322L54.926 18.8313C55.301 17.4062 54.2229 16 52.751 16H39.251C38.126 16 37.1697 16.8344 37.0197 17.95L34.0197 40.45C33.8416 41.8 34.8916 43 36.251 43H47.3791L43.0572 61.2343C42.7197 62.6594 43.8072 64 45.2416 64Z"
            stroke="black"
        />
    </svg>
);
