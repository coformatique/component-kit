import { Box, styled } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import * as allActionIcons from '../../icons/action';
import * as allInformationIcons from '../../icons/information';
import * as allNavigationIcons from '../../icons/navigation';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { AppIconButton, AppIconButtonProps, AppIconButtonVariant } from './AppIconButton';

const allIcons = { ...allActionIcons, ...allInformationIcons, ...allNavigationIcons };

export default {
  title: 'UI/Buttons/AppIconButton',
  component: AppIconButton,
} as Meta;

const Template: Story<AppIconButtonProps & { icon: keyof typeof allIcons }> = args => {
  const Icon = allIcons[args.icon];
  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <AppIconButton {...args} sx={{ margin: 'auto' }}>
        <Icon />
      </AppIconButton>
    </Box>
  );
};

export const Button = Template.bind({});
Button.args = {
  size: 'large',
  disabled: false,
  loading: false,
  variant: 'default',
  icon: 'SearchIcon',
};
Button.argTypes = {
  size: {
    control: { type: 'radio' },
    options: ['large', 'small'],
  },
  variant: {
    control: { type: 'radio' },
    options: ['default', 'background', 'floating'],
  },
  icon: {
    control: { type: 'radio' },
    options: Object.keys(allIcons),
  },
};

const GridBox = styled(Box)({
  display: 'grid',
  gap: 16,
  gridTemplateColumns: '100px repeat(3, 1fr)',
  '&>*:nth-child(4n+2), &>*:nth-child(4n+3), &>*:nth-child(4n+4)': {
    margin: 'auto',
  },
});

// All variants in one page
const VariantsTemplate: Story<{ icon: keyof typeof allIcons }> = args => {
  const Icon = allIcons[args.icon];

  return (
    <Box display="grid" gap={1} gridTemplateColumns="100px auto" pb={2}>
      <div />
      <GridBox>
        {['', 'Default/Hover/Active/Focused', 'loading', 'disabled'].map(s => (
          <div>{s}</div>
        ))}
      </GridBox>
      {(['big', 'small'] as Array<NonNullable<AppIconButtonProps['size']>>).map(size => [
        <Box alignSelf="center">{capitalizeFirstLetter(size)}</Box>,
        <GridBox>
          {(['default', 'background', 'floating'] as Array<AppIconButtonVariant>).map(variant => [
            <span>{capitalizeFirstLetter(variant)}</span>,
            [{}, { loading: true }, { disabled: true }].map(state => (
              <Box display="flex" flexWrap="wrap" gap={1}>
                {Icon ? (
                  <AppIconButton variant={variant} size={size} {...state}>
                    <Icon />
                  </AppIconButton>
                ) : (
                  //@ts-ignore
                  Object.values(allIcons).map(Icon => (
                    <AppIconButton variant={variant} size={size} {...state}>
                      <Icon />
                    </AppIconButton>
                  ))
                )}
              </Box>
            )),
          ])}
        </GridBox>,
      ])}
    </Box>
  );
};

export const Variants = VariantsTemplate.bind({});
Variants.args = { icon: 'DeleteIcon' };
Variants.argTypes = {
  icon: {
    control: { type: 'radio' },
    options: ['All of them!'].concat(Object.keys(allIcons)),
  },
};
