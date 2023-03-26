import { Box, Typography } from '@mui/material';
import { isValidElement, ReactNode } from 'react';
import { AppButton, ArrowRightIcon, colors } from '../..';
import { AppLinearProgress } from './AppLinearProgress';

type ActionObject = {
  text: string;
  onClick: () => void;
};

export type ScoreProgressInfoProps = {
  score: number;
  title: string;
  action?: ActionObject | ReactNode;
  color?: 'primary' | 'secondary';
  layout?: 'normal' | 'compact';
  labelVariant?: 'h2' | 'h3';
  labelDisabled?: boolean;
  disabled?: boolean;
};

const getActionNode = (action: ScoreProgressInfoProps['action'], color: ScoreProgressInfoProps['color']) => {
  if (!action) return null;
  if (typeof action === 'object') {
    if (isValidElement(action)) return action;
    return (
      <AppButton
        onClick={(action as ActionObject).onClick}
        inline
        noPadding
        {...(color === 'secondary' && { sx: { color: 'white' } })}
      >
        {(action as ActionObject).text}
        <ArrowRightIcon sx={{ ml: 1 }} />
      </AppButton>
    );
  }
  return null;
};

export const ScoreProgressInfo = ({
  layout = 'normal',
  score,
  title,
  action,
  color = 'secondary',
  labelVariant,
  disabled = false,
}: ScoreProgressInfoProps) => {
  const value = Math.min(100, Math.max(0, Math.round(score * 100)));
  const actionNode = getActionNode(action, color);

  const titleNode = (
    <Typography variant="h3" color={disabled ? colors.mediumGray : color === 'secondary' ? 'white' : 'black'}>
      {title}
    </Typography>
  );

  return layout === 'normal' ? (
    <Box display="flex" flex={1} flexDirection="column">
      <Box display="flex" justifyContent="space-between" mb={1}>
        {titleNode}
        {actionNode}
      </Box>
      <AppLinearProgress
        disabled={disabled}
        score={score}
        color={color === 'secondary' ? 'secondary' : 'primary'}
        label
        size="big"
      />
    </Box>
  ) : (
    <Box flex={1}>
      <Box display="flex" justifyContent="space-between" mb={1.5}>
        {titleNode}
        <Typography
          variant={labelVariant ?? 'h3'}
          color={disabled ? 'text.mediumGray' : color === 'secondary' ? 'text.green' : 'text.blue'}
        >
          {value}%
        </Typography>
      </Box>
      <AppLinearProgress
        disabled={disabled}
        score={score}
        color={color === 'secondary' ? 'secondary' : 'primary'}
        size="big"
      />
      <Box mb={1.5} />
      {actionNode}
    </Box>
  );
};
