import { SVGProps } from 'react';
import colors from '../../theme/colors';

export const MessageSentIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 144 105" fill="none" {...props}>
    <g clip-path="url(#clip0_2646_10338)">
      <path
        d="M25.4679 68.7498C21.4219 64.7038 14.8621 64.7038 10.8161 68.7498C6.77015 72.7958 6.77015 79.3556 10.8161 83.4016"
        stroke="white"
        stroke-dasharray="4 5"
      />
      <path
        d="M25.468 68.7503C36.0905 79.3728 19.6709 104.237 0.671387 104.237"
        stroke="white"
        stroke-dasharray="4 5"
      />
      <path d="M10.8174 83.4013C21.44 94.0239 37.141 92.4649 58.1809 71.4251" stroke="white" stroke-dasharray="4 5" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M119.999 3.00097L75.168 59.6146L73.083 77.3532L87.5078 64.2421L109.103 73.497L120 3.00024V3L120 3.00043L42.7754 45.7323L65.1414 54.9872L119.999 3.00097Z"
        fill={colors.green}
      />
      <path d="M106.789 71.9542L72.8545 58.0719L118.358 1L106.789 71.9542Z" stroke="black" stroke-linejoin="round" />
      <path d="M118.357 1L40.4619 44.1895L62.8279 53.4444L118.357 1.77124" stroke="black" stroke-linejoin="round" />
      <path d="M62.8281 53.4443L72.083 75.8103L72.8543 58.0718" stroke="black" stroke-linejoin="round" />
      <path d="M72.083 75.8103L85.1941 62.6992" stroke="black" stroke-linejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_2646_10338">
        <rect width="144" height="105" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
