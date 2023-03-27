import { SVGProps } from 'react';
import colors from '../../theme/colors';

export const RejectedSubscriptionsIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 79 71" width={79} height={71} fill="none" {...props}>
    <g clip-path="url(#a)">
      <rect
        x=".5"
        y="1.495"
        width="79"
        height="7"
        rx="3.5"
        stroke={colors.mediumGray}
        fill="white"
        stroke-dasharray="4 5"
      />
      <rect
        x=".5"
        y="17.495"
        width="79"
        height="7"
        rx="3.5"
        stroke={colors.mediumGray}
        fill="white"
        stroke-dasharray="4 5"
      />
      <rect
        x=".5"
        y="33.495"
        width="79"
        height="7"
        rx="3.5"
        stroke={colors.mediumGray}
        fill="white"
        stroke-dasharray="4 5"
      />
      <rect
        x=".5"
        y="49.495"
        width="79"
        height="7"
        rx="3.5"
        stroke={colors.mediumGray}
        fill="white"
        stroke-dasharray="4 5"
      />
      <rect
        x=".5"
        y="65.495"
        width="79"
        height="7"
        rx="3.5"
        stroke={colors.mediumGray}
        fill="white"
        stroke-dasharray="4 5"
      />
      <path
        d="M42.156 12.995C27.707 12.995 16 24.808 16 39.151c0 14.45 11.707 26.157 26.156 26.157 14.344 0 26.157-11.707 26.157-26.157 0-14.343-11.813-26.156-26.157-26.156ZM57.027 24.28c7.7 7.7 8.121 19.723 1.688 27.95L29.078 22.593c8.227-6.434 20.25-6.012 27.95 1.687ZM27.18 54.128c-7.7-7.7-8.121-19.723-1.688-27.95L55.13 55.816c-8.227 6.434-20.25 6.012-27.95-1.687Z"
        fill={colors.strokeGray}
      />
      <path
        d="M40.156 10.995C25.707 10.995 14 22.808 14 37.151c0 14.45 11.707 26.157 26.156 26.157 14.344 0 26.157-11.707 26.157-26.157 0-14.343-11.813-26.156-26.157-26.156ZM55.027 22.28c7.7 7.7 8.121 19.723 1.688 27.95L27.078 20.593c8.227-6.434 20.25-6.012 27.95 1.687ZM25.18 52.128c-7.7-7.7-8.121-19.723-1.688-27.95L53.13 53.816c-8.227 6.434-20.25 6.012-27.95-1.687Z"
        stroke="black"
        fill={colors.mediumGray}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="white" transform="translate(0 .995)" d="M0 0h80v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
