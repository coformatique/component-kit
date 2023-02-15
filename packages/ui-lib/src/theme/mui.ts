import { CSSObject } from '@emotion/css';
// types for the loading button component style overrides
import type {} from '@mui/lab/themeAugmentation';
import { createTheme } from '@mui/material';
import type { AppButtonVariantOverrides } from '../components/buttons/AppButton';
import { CHART_FONT, CHART_FONT_BOLD, FONT_BOLD, FONT_MEDIUM } from './consts';
import './fonts.scss';
import './global.scss';

declare module '@mui/material/IconButton' {
    interface IconButtonPropsSizeOverrides {
        medium: false;
    }
    interface IconButtonPropsColorOverrides {
        inherit: false;
        default: false;
        primary: false;
        secondary: false;
        error: false;
        info: false;
        success: false;
        warning: false;
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsSizeOverrides {
        medium: false;
    }
    interface IconButtonPropsColorOverrides {
        inherit: false;
        default: false;
        primary: false;
        secondary: false;
        error: false;
        info: false;
        success: false;
        warning: false;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides extends AppButtonVariantOverrides {
        outlined: true;
        contained: true;
        text: true;
    }
}

declare module '@mui/material/styles/createPalette' {
    export interface TypeText {
        primary: string;
        darkGray: string;
        warmGray: string;
        blue: string;
        green: string;
        error: string;
        mediumGray: string;
    }
}

declare module '@mui/material/Chip' {
    export interface ChipPropsColorOverrides {
        success: false;
        warning: false;
    }
}

declare module '@mui/material/TextField' {
    export interface TextFieldPropsSizeOverrides {
        labelless: true;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        h1: true;
        h2: true;
        h3: true;
        h4: true;
        body1: true;
        body2: true;
        button1: true;
        button2: true;
        caption: true;
        overline: true;
        navigationMenuCategory: true;
        navigationMenuSubcategory: true;
        chartValue: true;
        chartValueBig: true;
        chartLabel: true;
        formErrorMessage: true;
        accordionTitleAndModalSubtitle: true;
        accordionText: true;
        tooltipText: true;
        tagLabel: true;
        tableTier1Title: true;
        tableTier1Value: true;
        tableTier3TitleAndValue: true;
        // disable old variants
        h5: false;
        h6: false;
        subtitle1: false;
        subtitle2: false;
        button: false;
    }
}

export const typographyVariants = [
    'h1',
    'h2',
    'h3',
    'h4',
    'body1',
    'body2',
    'button1',
    'button2',
    'caption',
    'overline',
    'navigationMenuCategory',
    'navigationMenuSubcategory',
    'chartValue',
    'chartValueBig',
    'chartLabel',
    'formErrorMessage',
    'accordionTitleAndModalSubtitle',
    'accordionText',
    'tooltipText',
    'tagLabel',
    'tableTier1Title',
    'tableTier1Value',
    'tableTier3TitleAndValue',
] as const;

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
    ? ElementType
    : never;
export type AppTypographyVariant = ElementType<typeof typographyVariants>;

const boldFontStyles = { fontFamily: FONT_BOLD, fontWeight: 'normal' } as const;
export const typographyStyles: Record<AppTypographyVariant, CSSObject> = {
    // H1. Dashboard title, Edito title
    h1: { ...boldFontStyles, fontSize: '2.25rem', lineHeight: '2.25rem', letterSpacing: -0.75 },
    // H2. Modal title
    h2: { ...boldFontStyles, fontSize: '1.5rem', lineHeight: '1.75rem', letterSpacing: -0.5 },
    // H3. Tile title, Pie chart value
    h3: {
        fontFamily: FONT_MEDIUM,
        fontSize: '1.125rem',
        lineHeight: '1.5rem',
        letterSpacing: 0.5,
        fontWeight: 'normal',
    },
    // H4. Tab section, DRP Month
    h4: { fontSize: '1.125rem', lineHeight: '1.6875rem', letterSpacing: 0.5, fontWeight: 'normal' },
    // Body 1. Body of the text, Filter label, Input text, Dropdown option, DRP Available day
    body1: { fontSize: '1rem', lineHeight: '1.3125rem', letterSpacing: 0.5, fontWeight: 'normal' },
    // Body 2. Table cells, Column headers, DRP Weekdays
    body2: { fontSize: '0.875rem', lineHeight: '1.3125rem', letterSpacing: 0.25, fontWeight: 'normal' },
    // Button 1. Primary, Text
    button1: { fontSize: '1.125rem', letterSpacing: 0.5, ...boldFontStyles },
    // Button 2. Secondary
    button2: { fontSize: '0.875rem', letterSpacing: 0.5, ...boldFontStyles },
    // Caption text. Input label, Chart legend, Dropdown “Select / Deselect all” buttons, Dropdown option caption
    caption: { fontSize: '0.625rem', lineHeight: '0.875rem', letterSpacing: 0.25, fontWeight: 'normal' },
    // Overline. Dropdown group of options, “Your account” multi-account user menu overline
    overline: {
        fontSize: '0.625rem',
        lineHeight: '1.125rem',
        letterSpacing: 1,
        fontWeight: 'normal',
        textTransform: 'uppercase',
    },
    // ----------------------------------------------------------------
    // Navigation menu category
    navigationMenuCategory: {
        fontFamily: FONT_MEDIUM,
        fontSize: '0.75rem',
        lineHeight: '1.125rem',
        letterSpacing: 1,
        fontWeight: 'normal',
        textTransform: 'uppercase',
    },
    // Navigation menu subcategory
    navigationMenuSubcategory: {
        fontFamily: FONT_MEDIUM,
        fontSize: '0.75rem',
        lineHeight: '1.125rem',
        letterSpacing: 1,
        fontWeight: 'normal',
    },
    // Chart values (medium)
    chartValue: { fontFamily: CHART_FONT_BOLD, fontSize: '1rem', letterSpacing: 0, fontWeight: 'normal' },
    // Chart values (big)
    chartValueBig: { fontFamily: CHART_FONT_BOLD, fontSize: '1.3125rem', letterSpacing: 0, fontWeight: 'normal' },
    // Chart axis label, Chart value date
    chartLabel: { fontFamily: CHART_FONT, fontSize: '0.75rem', letterSpacing: 0, fontWeight: 'normal' },
    // Form error messages
    formErrorMessage: { ...boldFontStyles, fontSize: '0.875rem', letterSpacing: 0.5, lineHeight: '1.3125rem' },
    // Accordions title, Modal subtitle
    accordionTitleAndModalSubtitle: {
        ...boldFontStyles,
        fontSize: '1rem',
        letterSpacing: 0.5,
        lineHeight: '1.3125rem',
    },
    // Accordions text
    accordionText: { fontSize: '1rem', letterSpacing: 0.5, lineHeight: '1.75rem' },
    // Tooltip text
    tooltipText: {
        fontFamily: FONT_MEDIUM,
        fontWeight: 'normal',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        letterSpacing: 0.25,
    },
    // Tag label
    tagLabel: { fontWeight: 'bold', fontSize: '0.5625rem', letterSpacing: 1, lineHeight: 9 },
    // Table tier 1 title
    tableTier1Title: { fontFamily: FONT_MEDIUM, fontSize: '1.5rem', lineHeight: '1.75rem', letterSpacing: 0.5 },
    // Table tier 1 value
    tableTier1Value: { ...boldFontStyles, fontSize: '1.125rem', lineHeight: '1.5rem', letterSpacing: 0.5 },
    // Table tier 3 title & value
    tableTier3TitleAndValue: { ...boldFontStyles, fontSize: '0.875rem', lineHeight: '1.125rem', letterSpacing: 0.25 },
};

export const spacingTheme = createTheme({ breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } } });
