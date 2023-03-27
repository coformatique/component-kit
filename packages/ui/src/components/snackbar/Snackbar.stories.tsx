import { AppButton } from '../..';
import { Meta, Story } from '@storybook/react';
import { useCallback, useEffect } from 'react';
import { AppSnackbarProvider } from './SnackbarProvider';
import { useSnackbar, UseSnackbarProps } from './useSnackbar';

export default {
  title: 'UI/Snackbar',
} as Meta;

type Args = UseSnackbarProps & { showSecondaryButton: boolean };

const SnackbarStory = (options: Args) => {
  const { icon, message, variant, showSecondaryButton, closable, floating, autoHideDuration } = options;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showSnackbar = useCallback(
    () =>
      enqueueSnackbar({
        autoHideDuration,
        preventDuplicate: true,
        key: JSON.stringify(Object.values(options)),
        closeSnackbar,
        message,
        icon,
        closable,
        floating,
        variant,
        secondaryButton: showSecondaryButton
          ? {
              text: 'Refresh',
              onClick: () => console.log('clicked refresh button'),
            }
          : undefined,
      }),
    [
      autoHideDuration,
      closable,
      closeSnackbar,
      enqueueSnackbar,
      floating,
      icon,
      message,
      options,
      showSecondaryButton,
      variant,
    ],
  );

  useEffect(() => {
    showSnackbar();
  }, [options, showSnackbar]);

  return <AppButton onClick={showSnackbar}>Show</AppButton>;
};

const Template: Story<Args> = args => {
  return (
    <AppSnackbarProvider>
      <SnackbarStory {...args} />
    </AppSnackbarProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: (
    <>
      This is a <b>ssssnackbarr!</b>
    </>
  ),
  variant: 'success',
  icon: true,
  showSecondaryButton: true,
  floating: true,
  closable: false,
  autoHideDuration: 2500,
};
Default.argTypes = {
  variant: {
    control: {
      type: 'radio',
      options: ['success', 'error', 'info'],
    },
  },
  message: {
    description: 'You can replace the whole object with a string between double quotes, e.g. "This is a snackbar!"',
  },
};
Default.storyName = 'Snackbar';
