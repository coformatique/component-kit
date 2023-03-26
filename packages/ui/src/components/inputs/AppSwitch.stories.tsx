import { Box, SwitchProps } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { AppSwitch } from './AppSwitch';

export default { title: 'UI/Switch', component: AppSwitch } as Meta;

const Template: Story<SwitchProps> = args => {
  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <AppSwitch {...args} />
    </Box>
  );
};
export const Default = Template.bind({});
Default.args = { checked: false, size: 'small', disabled: false };
Default.argTypes = {
  size: {
    control: 'radio',
    options: ['small', 'medium'],
  },
};

const AllVariantsTemplate: Story<SwitchProps> = args => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      {(['medium', 'small'] as Array<SwitchProps['size']>).map(size =>
        [true, false].map(disabled =>
          [true, false].map(checked => <AppSwitch {...args} size={size} disabled={disabled} checked={checked} />),
        ),
      )}
    </Box>
  );
};
export const AllVariants = AllVariantsTemplate.bind({});
