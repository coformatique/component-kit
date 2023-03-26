// imports
import { Box, Grid, GridSize, SvgIconProps, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { FC } from 'react';
import * as Action from './action';
import * as Information from './information';
import * as Navigation from './navigation';

export default { title: 'UI/Icons/Icons' } as Meta;

const colors: Array<SvgIconProps['color']> = [
  'inherit',
  'disabled',
  'primary',
  'secondary',
  'error',
  'action',
  'info',
  'success',
  'warning',
  undefined,
];

interface Props {
  side: number;
  outline: string;
  grid: number;
  color: SvgIconProps['color'];
  showIconName: boolean;
  size: undefined | 'small' | 'medium' | 'large';
}

const renderIcons = (
  iconsObject: Record<string, FC<SvgIconProps>>,
  { side, outline, grid, color, showIconName, size }: Props,
  mui?: boolean,
) => (
  <Grid container spacing={1} alignItems="flex-start">
    {Object.keys(iconsObject).map(icon => {
      const Icon = iconsObject[icon as keyof typeof iconsObject];
      return (
        <Grid
          item
          key={icon}
          {...(grid ? { xs: (12 / grid) as GridSize } : { xs: 3, sm: 2, md: 1 })}
          sx={{ aspectRatio: '1' }}
        >
          <Icon
            color={color}
            titleAccess={icon}
            fontSize={size}
            sx={{
              ...(!size && { height: side, width: side }),
              outline,
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
          {showIconName && (
            <Typography variant="caption" sx={{ overflowWrap: 'anywhere' }}>
              {icon}
              {mui ? 'Icon' : ''}
            </Typography>
          )}
        </Grid>
      );
    })}
  </Grid>
);

export const Icons: Story<Props> = props => (
  <Box>
    <Typography variant="h2" mb={1.5}>
      Navigation
    </Typography>
    {renderIcons(Navigation, props)}
    <hr />
    <Typography variant="h2" mb={1.5}>
      Action
    </Typography>
    {renderIcons(Action, props)}
    <hr />
    <Typography variant="h2" mb={1.5}>
      Information
    </Typography>
    {renderIcons(Information, props)}
    <hr />
  </Box>
);

Icons.args = {
  side: 80,
  outline: '1px solid #ddd',
  grid: 0,
  color: 'primary',
  showIconName: false,
  size: undefined,
};
Icons.argTypes = {
  color: {
    control: { type: 'radio' },
    options: colors,
  },
  size: {
    control: { type: 'radio' },
    options: [undefined, 'small', 'medium', 'large'],
  },
};
