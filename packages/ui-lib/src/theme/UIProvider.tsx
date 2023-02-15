import {
    AppSnackbarProvider,
    BORDER_RADIUS,
    boxShadows,
    ChevronDownIcon,
    colors,
    DEFAULT_FONT,
    DIALOG_WIDTH_DEFAULT,
    iconButtonDiameters,
    spacingTheme,
    typographyStyles,
} from '..';
import { alpha, createTheme, CssBaseline, Theme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

interface UIProviderProps {
    children: ReactNode;
    theme?: Theme;
    consts?: {
        borderRadius?: number;
        borderRadiusSm?: number;
        borderRadiusLg?: number;
        dialogWidthDefault?: number;
        defaultFont?: string;
        iconButtonDiameterSm?: number;
        iconButtonDiameterLg?: number;
    };
}

/**
 * This function takes a Theme object and omits all the already used attributes in the theme
 * Then returns the final theme object after omission.
 * The purpose of this function is to provide the functionality for the user of the UI library to add their own custom theme
 * @param theme
 * @returns modifiedTheme
 */
const getCustomTheme = (theme: Theme) => {
    const { palette, components, typography, shape, ...customTheme } = theme;
    return customTheme;
};

export const UIProvider: React.FC<UIProviderProps> = ({ theme, consts, children }: UIProviderProps) => {
    const defaultTheme = createTheme({
        palette: {
            mode: 'light',
            background: { default: colors.ultraLightGray },
            primary: { main: colors.blue },
            secondary: { main: colors.green },
            error: { main: colors.red },
            success: { main: colors.green },
            text: {
                // default, opaque black, if no color prop is supplied
                primary: alpha(colors.black, 0.87),
            },
            // This will merge any custom palette values (if provided) with the default theme palette
            ...theme?.palette,
        },
        breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } },
        typography: {
            fontFamily: [
                consts?.defaultFont ?? DEFAULT_FONT,
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
            // This will merge any custom typography attributes (if provided) with the default typography attributes
            ...theme?.typography,
        },
        shape: {
            borderRadius: consts?.borderRadius ?? BORDER_RADIUS,
            // This will merge any custom shape values (if provided) with the default shape values
            ...theme?.shape,
        },
        components: {
            MuiButtonBase: { defaultProps: { disableRipple: true } },
            MuiButton: {
                variants: [
                    {
                        props: { size: 'large' },
                        style: { height: 56, padding: '0px 32px', borderRadius: 10, ...typographyStyles.button1 },
                    },
                    {
                        props: { size: 'small' },
                        style: { height: 36, padding: '0px 16px', borderRadius: 6, ...typographyStyles.button2 },
                    },
                    {
                        props: { variant: 'primaryContained' },
                        style: {
                            backgroundColor: theme?.palette.primary.main ?? colors.blue,
                            color: 'white',
                            '&:hover, &:active, &:focus': { backgroundColor: 'black' },
                            '&:active': { color: colors.mediumGray },
                            ':disabled': { backgroundColor: colors.lightGray },
                        },
                    },
                    {
                        props: { variant: 'primaryOutlined' },
                        style: {
                            outline: `1px solid ${theme?.palette.primary.main ?? colors.blue}`,
                            color: colors.blue,
                            '&:hover, &:active, &:focus': {
                                outline: '1px solid black',
                                backgroundColor: 'transparent',
                            },
                            '&:hover': {
                                color: 'black',
                            },
                            '&:active': {
                                color: colors.warmGray,
                            },
                            ':disabled': {
                                outlineColor: colors.mediumGray,
                                color: colors.mediumGray,
                            },
                        },
                    },
                    {
                        props: { variant: 'primaryContainedLight' },
                        style: {
                            backgroundColor: colors.ultraLightBlue,
                            color: colors.blue,
                            '&:hover, &:active': {
                                backgroundColor: colors.lightBlue,
                            },
                            '&:active': {
                                color: colors.ultraLightBlue,
                                outline: 'none !important',
                            },
                            '&:focus': {
                                outline: `1px solid ${colors.blue}`,
                            },
                            ':disabled': { backgroundColor: colors.lightGray },
                        },
                    },
                    {
                        props: { variant: 'primaryText' },
                        style: {
                            padding: '12px 22px',
                            color: theme?.palette.primary.main ?? colors.blue,
                            '&:hover, &:active, &:focus': {
                                backgroundColor: 'transparent',
                            },
                            '&:hover': { color: 'black' },
                            '&:active': { color: colors.warmGray, outline: 'none !important' },
                            '&:focus': { outline: `1px solid black` },
                        },
                    },
                    {
                        props: { variant: 'dangerContained' },
                        style: {
                            backgroundColor: theme?.palette?.error.main ?? colors.red,
                            color: 'white',
                            '&:hover, &:active': { backgroundColor: 'black' },
                            '&:focus': { outline: '1px solid black' },
                            '&:active': { color: colors.mediumGray, outline: 'none !important' },
                            ':disabled': { backgroundColor: colors.lightGray },
                        },
                    },
                    {
                        props: { variant: 'dangerOutlined' },
                        style: {
                            outline: `1px solid ${theme?.palette?.error.main ?? colors.red}`,
                            color: theme?.palette?.error.main ?? colors.red,
                            '&:hover, &:active, &:focus': {
                                outline: '1px solid black',
                                backgroundColor: 'transparent',
                            },
                            '&:hover': {
                                color: 'black',
                            },
                            '&:active': {
                                color: colors.warmGray,
                            },
                            ':disabled': {
                                outlineColor: colors.mediumGray,
                                color: colors.mediumGray,
                            },
                        },
                    },
                    {
                        props: { variant: 'dangerContainedLight' },
                        style: {
                            backgroundColor: colors.lightRed,
                            color: theme?.palette?.error.main ?? colors.red,
                            '&:hover, &:active': {
                                backgroundColor: colors.pink,
                            },
                            '&:active': {
                                color: 'white',
                                outline: 'none !important',
                            },
                            '&:focus': {
                                outline: `1px solid black`,
                            },
                            ':disabled': { backgroundColor: colors.lightGray },
                        },
                    },

                    {
                        props: { variant: 'dangerText' },
                        style: {
                            padding: '12px 22px',
                            color: theme?.palette?.error.main ?? colors.red,
                            '&:hover, &:active, &:focus': {
                                backgroundColor: 'transparent',
                            },
                            '&:hover': { color: 'black' },
                            '&:active': { color: colors.warmGray, outline: 'none !important' },
                            '&:focus': { outline: `1px solid black` },
                        },
                    },

                    {
                        props: { variant: 'successContained' },
                        style: {
                            backgroundColor: theme?.palette?.success.main ?? colors.green,
                            color: 'white',
                            '&:hover, &:active': { backgroundColor: 'black' },
                            '&:active': { color: colors.mediumGray },
                            '&:focus': {
                                outline: '1px solid black',
                            },
                            ':disabled': { backgroundColor: colors.lightGray },
                        },
                    },
                ],
            },
            MuiLoadingButton: {
                defaultProps: { variant: 'primaryOutlined', size: 'large' },
                styleOverrides: {
                    root: {
                        '&.MuiLoadingButton-loading': {
                            color: 'white',
                            '&.MuiButton-primaryContained': { backgroundColor: colors.lightBlue },
                            '&.MuiButton-primaryOutlined': {
                                outline: `1px solid ${colors.lightBlue}`,
                                color: theme?.palette.primary.main ?? colors.blue,
                            },
                            '&.MuiButton-primaryContainedLight': {
                                backgroundColor: colors.ultraLightBlue,
                                color: theme?.palette.primary.main ?? colors.blue,
                            },
                            '&.MuiButton-primaryText': {
                                backgroundColor: 'none',
                                color: colors.mediumGray,
                                '& .MuiLoadingButton-loadingIndicator': {
                                    color: theme?.palette.primary.main ?? colors.blue,
                                },
                            },

                            '&.MuiButton-dangerContained': { backgroundColor: colors.pink },
                            '&.MuiButton-dangerOutlined': {
                                outline: `1px solid ${colors.pink}`,
                                color: theme?.palette?.error.main ?? colors.red,
                            },
                            '&.MuiButton-dangerContainedLight': {
                                backgroundColor: colors.lightRed,
                                color: theme?.palette?.error.main ?? colors.red,
                            },
                            '&.MuiButton-dangerText': {
                                backgroundColor: 'none',
                                color: colors.mediumGray,
                                '& .MuiLoadingButton-loadingIndicator': {
                                    color: theme?.palette?.error.main ?? colors.red,
                                },
                            },

                            '&.MuiButton-successContained': { backgroundColor: colors.lightGreen },
                        },
                    },
                    loadingIndicator: { position: 'unset', marginRight: 13.33, height: 17.33, width: 17.33 },
                },
            },
            MuiTextField: {
                variants: [
                    {
                        props: { size: 'small' },
                        style: {
                            '&>label, & label': { display: 'none' },
                            '& .MuiInputBase-input, &>.MuiInputBase-input, & .chipContainerBox': { paddingBlock: 4 },
                        },
                    },
                    {
                        props: { select: true, variant: 'standard' },
                        style: {
                            '& div.MuiSelect-select.MuiSelect-standard.MuiInputBase-input.MuiInput-input': {
                                paddingRight: `${spacingTheme.spacing(5)}`,
                            },
                        },
                    },
                ],
            },
            MuiFilledInput: {
                defaultProps: {
                    // disableRipple: true,
                    disableUnderline: true,
                },
                styleOverrides: {
                    root: {
                        backgroundColor: 'white',
                        border: `1px solid ${colors.strokeGray}`,
                        borderRadius: consts?.borderRadius ?? BORDER_RADIUS,
                        '&:hover': { backgroundColor: 'white', borderColor: colors.warmGray },
                        '&.Mui-focused': {
                            backgroundColor: 'white',
                            boxShadow: `${colors.green} 0 0 0 1px`,
                            borderColor: colors.green,
                        },
                        '&.Mui-error': {
                            backgroundColor: 'white',
                            boxShadow: `${colors.red} 0 0 0 1px`,
                            borderColor: colors.red,
                        },
                        '&.Mui-disabled': { backgroundColor: alpha(colors.black, 0.05) },
                    },
                    input: {
                        '&:-webkit-text-fill-color': { backgroundColor: 'white' },
                        '&:-webkit-autofill': {
                            '-webkit-box-shadow': '0 0 0px 1000px white inset',
                            borderRadius: consts?.borderRadius ?? BORDER_RADIUS,
                        },
                        '&::selection': { backgroundColor: alpha(colors.green, 0.2) },
                    },
                },
            },
            MuiListSubheader: {
                defaultProps: { disableSticky: true },
                styleOverrides: {
                    root: {
                        fontSize: '0.75rem',
                        lineHeight: '24px',
                        marginTop: spacingTheme.spacing(1.5),
                        marginBottom: spacingTheme.spacing(0.75),
                        textTransform: 'uppercase',
                        pointerEvents: 'none',
                    },
                },
            },
            MuiSelect: {
                defaultProps: {
                    IconComponent: ChevronDownIcon,
                    MenuProps: { elevation: 10, PaperProps: { square: true } },
                },
                styleOverrides: {
                    icon: {
                        top: 'unset',
                        right: 18,
                        width: (consts?.iconButtonDiameterSm ?? iconButtonDiameters.small) / 1.5,
                        height: (consts?.iconButtonDiameterSm ?? iconButtonDiameters.small) / 1.5,
                        color: colors.blue,
                    },
                    select: { '&:focus': { backgroundColor: 'transparent' } },
                },
            },
            MuiIconButton: {
                defaultProps: { size: 'large' },
                styleOverrides: {
                    root: {
                        // width&height: 32
                        width: consts?.iconButtonDiameterLg ?? iconButtonDiameters.large,
                        height: consts?.iconButtonDiameterLg ?? iconButtonDiameters.large,
                        '&>svg, &>img': {
                            overflow: 'unset',
                            width: (consts?.iconButtonDiameterLg ?? iconButtonDiameters.large) / 2,
                            height: (consts?.iconButtonDiameterLg ?? iconButtonDiameters.large) / 2,
                        },
                        '&.loading': { '&>svg, &>img': { width: 18, height: 18 } },
                    },
                    sizeSmall: {
                        // width&height: 24
                        width: consts?.iconButtonDiameterSm ?? iconButtonDiameters.small,
                        height: consts?.iconButtonDiameterSm ?? iconButtonDiameters.small,
                        '&>svg, &>img': {
                            width: (consts?.iconButtonDiameterSm ?? iconButtonDiameters.small) / 2,
                            height: (consts?.iconButtonDiameterSm ?? iconButtonDiameters.small) / 2,
                        },
                        '&.loading': { '&>svg, &>img': { width: 16, height: 16 } },
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        borderRadius: 0,
                    },
                    colorPrimary: {
                        backgroundColor: 'transparent',
                        background: `linear-gradient(180deg, ${colors.blue} 50%, transparent 50%)`,
                    },
                },
            },
            MuiSvgIcon: {
                variants: [{ props: { color: 'info' }, style: { color: 'black' } }],
                styleOverrides: {
                    root: { width: 16, height: 16 },
                    fontSizeLarge: { width: 24, height: 24 },
                    fontSizeSmall: { width: 12, height: 12 },
                },
            },
            MuiContainer: { styleOverrides: { fixed: { maxWidth: '480px !important' } } },
            MuiCard: { styleOverrides: { root: { overflow: 'visible' } } },
            MuiCardHeader: {
                styleOverrides: { root: { paddingBottom: 0 }, subheader: { marginTop: spacingTheme.spacing(2) } },
            },
            MuiCardMedia: { styleOverrides: { img: { maxHeight: '100%', objectFit: 'contain' } } },
            MuiTableContainer: { styleOverrides: { root: { padding: spacingTheme.spacing(2) } } },
            MuiTable: { styleOverrides: { root: { borderCollapse: 'separate' } } },
            MuiTableCell: {
                styleOverrides: { head: { color: colors.darkGray }, stickyHeader: { backgroundColor: 'transparent' } },
            },
            MuiTableSortLabel: { styleOverrides: { root: { width: '100%' } } },
            MuiTabs: {
                defaultProps: { variant: 'scrollable', scrollButtons: false, orientation: 'horizontal' },
                styleOverrides: {
                    root: {
                        minHeight: 36,
                        background: `linear-gradient(${colors.strokeGray}, ${colors.strokeGray}) no-repeat`,
                        backgroundPosition: 'bottom',
                        backgroundSize: '100% 1px',
                        '& button.Mui-disabled': { color: colors.warmGray },
                        '& button.MuiTab-root:not(.Mui-selected):not(.Mui-disabled)': { color: 'black' },
                    },
                    flexContainer: { columnGap: spacingTheme.spacing(4), rowGap: spacingTheme.spacing(2), height: 36 },
                    indicator: { height: '3px' },
                    vertical: {
                        height: 'fit-content',
                        minWidth: 'fit-content',
                        border: 'none',
                        backgroundPosition: 'left',
                        backgroundSize: '1px 100%',
                        overflow: 'visible', // to show the indicator correctly
                        '&>div.MuiTabs-scroller': {
                            overflow: 'visible', // to show the indicator correctly
                            '&>span.MuiTabs-indicator': { left: 0, width: 3 },
                            '&>div.MuiTabs-flexContainer': {
                                height: 'fit-content',
                                '&>button': {
                                    marginRight: 0,
                                    marginLeft: spacingTheme.spacing(2),
                                    padding: 0,
                                    minHeight: 0,
                                },
                            },
                        },
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        fontSize: '1.125rem',
                        minWidth: 0,
                        minHeight: 0,
                        padding: 0,
                        '&.Mui-selected': { color: colors.blue },
                    },
                    // wrapper: { alignItems: 'start' },
                },
            },
            MuiTabPanel: {
                styleOverrides: {
                    root: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        padding: 0,
                        paddingTop: spacingTheme.spacing(3),
                        ':empty': { display: 'none' },
                    },
                },
            },
            MuiDialog: {
                styleOverrides: {
                    container: { background: 'rgb(0 0 0 / 40%)' },
                    paper: {
                        paddingTop: spacingTheme.spacing(3),
                        paddingBottom: spacingTheme.spacing(2),
                    },
                    paperWidthFalse: {
                        maxWidth: consts?.dialogWidthDefault ?? DIALOG_WIDTH_DEFAULT,
                    },
                    paperFullScreen: {
                        margin: '0 !important',
                        backgroundColor: colors.ultraLightGray,
                        paddingTop: spacingTheme.spacing(1),
                        '&>hr': { marginTop: spacingTheme.spacing(1) },
                        '&>.MuiDialogTitle-root': {
                            paddingLeft: spacingTheme.spacing(9),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'right',
                            '&>div:first-child': {
                                marginRight: 'auto',
                            },
                        },
                    },
                },
            },
            MuiDialogContent: {
                styleOverrides: {
                    root: {
                        [spacingTheme.breakpoints.up('md')]: {
                            paddingTop: spacingTheme.spacing(5),
                            paddingRight: 80,
                            paddingLeft: 80,
                        },
                        [spacingTheme.breakpoints.down('md')]: { paddingRight: 32, paddingLeft: 32 },
                        '&>.MuiContainer-root': { paddingTop: spacingTheme.spacing(3) },
                        [spacingTheme.breakpoints.up('xl')]: {
                            '&>.MuiPaper-root': { maxWidth: spacingTheme.breakpoints.values.xl, alignSelf: 'center' },
                        },
                    },
                    dividers: {
                        margin: `${spacingTheme.spacing(3)} ${spacingTheme.spacing(-3)}`,
                        backgroundColor: alpha(colors.blue, 0.04),
                        borderTop: `2px dotted ${colors.strokeGray}`,
                        borderBottom: `2px dotted ${colors.strokeGray}`,
                    },
                },
            },
            MuiDialogActions: {
                styleOverrides: {
                    spacing: {
                        padding: `0 ${spacingTheme.spacing(6)} ${spacingTheme.spacing(5)}`,
                        '&>*:first-of-type:not(:only-child)': { marginRight: spacingTheme.spacing(1) },
                    },
                },
            },
            MuiAutocomplete: {
                styleOverrides: {
                    listbox: { margin: '4px 0' },
                    paper: {
                        boxShadow: boxShadows.dropdown,
                        borderRadius: consts?.borderRadius ? consts.borderRadius : BORDER_RADIUS,
                        margin: 0,
                    },
                    option: {
                        /* Hover*/ '&[data-focus="true"]': { backgroundColor: alpha(colors.blue, 0.04) },
                        /* Selected*/ '&[aria-selected="true"]': { color: colors.blue, backgroundColor: 'white' },
                    },
                    endAdornment: { right: '16px !important' },
                },
                defaultProps: {
                    componentsProps: {
                        popupIndicator: { size: 'small' },
                        clearIndicator: { size: 'small' },
                    },
                },
            },
            MuiPopover: {
                styleOverrides: {
                    paper: {
                        boxShadow: boxShadows.dropdown,
                    },
                },
            },
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        width: '100%',
                        transition: 'all ease 200ms',
                        boxShadow: boxShadows.tile,
                        '&::before': { backgroundColor: 'transparent' },
                        '&.Mui-expanded, &:hover': {
                            boxShadow: boxShadows.dropdown,
                        },
                        '&.Mui-expanded': { margin: 0 },
                    },
                },
            },
            MuiAccordionSummary: {
                styleOverrides: {
                    content: {
                        // create spacing between arrow and content
                        paddingRight: spacingTheme.spacing(2),
                        margin: 0,
                    },
                    root: {
                        padding: `${spacingTheme.spacing(3)} ${spacingTheme.spacing(4)}`,
                        '&.Mui-expanded': { paddingBottom: spacingTheme.spacing(2) },
                    },
                    expandIconWrapper: {
                        color: colors.blue,
                        '&.Mui-expanded': { transform: 'rotate(90deg)', opacity: 0.5 },
                    },
                },
            },
            MuiAccordionDetails: {
                styleOverrides: {
                    root: {
                        paddingInline: spacingTheme.spacing(4),
                        paddingTop: 0,
                        paddingBottom: spacingTheme.spacing(3),
                    },
                },
            },
            MuiCssBaseline: {
                styleOverrides: {
                    // Name of the rule
                    '@global': {
                        '*, *::before, *::after': {
                            transition: 'none !important',
                        },
                    },
                },
            },
            // This will merge any custom component overrides (if provided) with the default component overrides
            ...theme?.components,
        },
        // This adds any missing keys from the custom theme to the default theme so that they can be merged together
        ...(theme && getCustomTheme(theme)),
    });

    return (
        <MuiThemeProvider theme={defaultTheme}>
            <AppSnackbarProvider>
                <CssBaseline />
                {children}
            </AppSnackbarProvider>
        </MuiThemeProvider>
    );
};
