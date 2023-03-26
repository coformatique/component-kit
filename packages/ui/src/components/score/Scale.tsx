import { alpha, Box, Typography } from '@mui/material';
import colors from '../../theme/colors';

export const MIN_SCALE_WIDTH = 230;

export type ScaleProps = {
  value: number;
  min: number;
  max: number;
  lessIsBetter?: boolean;
};

const getNoOfDecimalPlaces = (range: number) => {
  if (range <= 0.4) return 2;
  if (range <= 10) return 1;
  return 0;
};

const formatNumber = (value: number, decimalPlaces: number) => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(value * factor) / factor;
};

const renderLowerScaleValues = (min: number, range: number, decimalPlaces: number, lessIsBetter?: boolean) =>
  (lessIsBetter ? [0, 0.3, 0.6, 1] : [0, 0.4, 0.7, 1]).map(i => (
    <Box position="absolute" left={`${i * 100}%`} display="flex" justifyContent="center" width={0}>
      <Typography color="text.warmGray" variant="caption">
        {formatNumber(min + i * range, decimalPlaces)}
        {i === 1 ? '+' : ''}
      </Typography>
    </Box>
  ));

const getScaleBoxesArray = (value: number, min: number, range: number, lessIsBetter?: boolean) =>
  lessIsBetter
    ? [
        {
          width: '30%',
          bgcolor: value <= min + range * 0.3 ? colors.green : colors.green + '66',
        },
        {
          width: '30%',
          bgcolor: value > min + range * 0.3 && value <= min + range * 0.6 ? colors.yellow : alpha(colors.yellow, 0.4),
        },
        {
          width: '40%',
          bgcolor: value > min + range * 0.6 ? colors.red : colors.red + '66',
        },
      ]
    : [
        {
          width: '40%',
          bgcolor: value < min + range * 0.4 ? colors.red : colors.red + '66',
        },
        {
          width: '30%',
          bgcolor: value >= min + range * 0.4 && value < min + range * 0.7 ? colors.yellow : alpha(colors.yellow, 0.4),
        },
        {
          width: '30%',
          bgcolor: value >= min + range * 0.7 ? colors.green : colors.green + '66',
        },
      ];

export const Scale = ({ max: _max, min: _min, value, lessIsBetter }: ScaleProps) => {
  const [min, max] = _min > _max ? [_max, _min] : [_min, _max];
  const range = max - min;
  const percentage = Math.max(0, Math.min(1, (value - min) / range));
  const decimalPlaces = getNoOfDecimalPlaces(range);

  return (
    <Box minWidth={MIN_SCALE_WIDTH} width="100%">
      <Box position="relative" height={18} width="100%">
        <Box position="absolute" left={`${percentage * 100}%`} display="flex" justifyContent="center" width={0}>
          <Typography variant="caption" fontWeight="bold" color="white">
            {formatNumber(value, decimalPlaces)}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" position="relative">
        <Box
          id="indicator"
          position="absolute"
          width={2}
          height={8}
          bgcolor="white"
          left={`${percentage * 100}%`}
          top={-2}
        />
        {getScaleBoxesArray(value, min, range, lessIsBetter).map(i => (
          <Box height={4} {...i} />
        ))}
      </Box>
      <Box position="relative" height={18} width="100%" mt={0.25}>
        {renderLowerScaleValues(min, range, decimalPlaces, lessIsBetter)}
      </Box>
    </Box>
  );
};
