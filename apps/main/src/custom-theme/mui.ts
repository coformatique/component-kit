import { alpha, createTheme } from 'ui-lib';
import colors from './colors.module.scss';
import { DEFAULT_FONT } from './consts';

export const customTheme = createTheme({
    palette: {
        mode: 'light',
        background: { default: colors.white },
        primary: { main: colors.golden },
        secondary: { main: colors.blue },
        error: { main: colors.red },
        text: {
            // default, opaque black, if no color prop is supplied
            primary: alpha(colors.black, 0.87),
            darkGray: colors.darkGray,
            warmGray: colors.warmGray,
            blue: colors.blue,
            green: colors.green,
            error: colors.red,
            mediumGray: colors.mediumGray,
        },
    },
    typography: {
        fontFamily: [
            DEFAULT_FONT,
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
        ].join(','),
        button: { textTransform: 'unset' },
    },
});
