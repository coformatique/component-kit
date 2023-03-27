import { Box, Chip, ChipProps, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'UI/Chip',
  component: Chip,
} as Meta;

const colors: Array<ChipProps['color']> = ['primary', 'secondary', 'error', 'default', 'info'];
const variants: Array<ChipProps['variant']> = ['outlined', 'filled'];
const sizes: Array<ChipProps['size']> = ['small', 'medium'];

const Template: Story<ChipProps & { deletable: boolean; clickable: boolean }> = ({ deletable, clickable, ...args }) => {
  const props = {
    ...args,
    onDelete: deletable ? () => {} : undefined,
    onClick: clickable ? () => {} : undefined,
  };
  return (
    <Box
      sx={{
        m: 'auto',
        margin: 'auto',
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Chip {...props} />
      {String(props.label).toLowerCase() === 'tag mahal' && (
        <Typography sx={{ position: 'absolute', bottom: 0, right: 0, p: '4px 8px' }}>
          <i>pun intended!</i>
        </Typography>
      )}
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'outlined',
  color: 'primary',
  label: 'Tag Mahal',
  size: 'small',
  deletable: false,
  clickable: false,
};
Default.argTypes = {
  variant: {
    control: 'radio',
    options: variants,
  },
  size: {
    control: 'radio',
    options: sizes,
  },
  color: {
    control: 'radio',
    options: colors,
  },
};
Default.storyName = 'Chip';

const VariantsTemplate: Story<{ label: string; clickable: boolean }> = args => (
  <Box
    sx={{
      m: 'auto',
      margin: 'auto',
      width: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {[undefined, () => {}].map(onDelete =>
        sizes.map(size =>
          variants.map(variant => (
            <Box sx={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
              {colors.map(color => (
                <Box justifyContent="center" display="flex">
                  <Chip {...args} {...{ size, variant, color, onDelete }} />
                </Box>
              ))}
            </Box>
          )),
        ),
      )}
    </Box>
  </Box>
);

export const AllVariants = VariantsTemplate.bind({});
AllVariants.args = { label: 'Tag Mahal', clickable: false };
AllVariants.storyName = 'All variants';
