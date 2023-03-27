import { colors, UIProvider } from '../src';
import { alpha, createTheme } from '@mui/material';
import './styles.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
};

const customTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: colors.lightGray },
    primary: { main: colors.blue },
    secondary: { main: colors.green },
    // don't know if we need it
    // error: { main: colors.red },
    text: {
      // default, opaque black, if no color prop is supplied
      primary: alpha(colors.black, 0.87),
    },
  },
});

export const decorators = [
  Story => (
    <UIProvider
    // theme={customTheme}
    >
      <Story />
    </UIProvider>
  ),
];
