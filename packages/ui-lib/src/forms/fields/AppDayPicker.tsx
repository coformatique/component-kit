import { css } from '@emotion/css';
import { InputProps, MenuItem, styled, useMediaQuery, useTheme } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import {
    CalendarPickerView,
    DesktopDatePicker,
    LocalizationProvider,
    MobileDatePicker,
    MobileDatePickerProps,
    PickersDay,
    PickersDayProps,
} from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import clsx from 'clsx';
import { DateTime } from 'luxon';
import { ComponentType, Dispatch, FC, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { useFormContext, UseFormReturn } from 'react-hook-form';
import { DisplayPeriod } from '../..';
import { ErrorText } from '../../components/ErrorText';
import { MultiInputRow } from '../../components/MultiInputRow';
import { CaretDownIcon, ChevronLeftIcon, DateIcon } from '../../icons';
import colors from '../../theme/colors.module.scss';
import { boxShadows } from '../../theme/consts';
import {
    dateTimeToString,
    endOfPeriod,
    isSameDay,
    isWithinInterval,
    startOfPeriod,
    stringToDateTime,
} from '../../utils/dateTime';
import { AppFormField } from '../AppForm';
import { getErrorByPath } from '../getErrorByPath';
import { AppTextField } from './AppTextField';

// hover state style
const hoverStyles = { backgroundColor: colors.ultraLightGreen, color: colors.green };
const pickerClassName = css({
    '& div.MuiCalendarPicker-root': {
        // hovering over month/year title
        '& > div:first-child > div:first-child:hover div.PrivatePickersFadeTransitionGroup-root': hoverStyles,
        // make weekday headers 3 letters instead of one by basically adding the last 2 letters
        '& > .MuiCalendarPicker-viewTransitionContainer > div > div:first-child:not(.MuiMonthPicker-root)': {
            '& .MuiTypography-root': { display: 'inline-block', height: 20 },
            '& .MuiTypography-root:nth-child(1)::after': { content: /*M*/ "'on'" },
            '& .MuiTypography-root:nth-child(2)::after': { content: /*T*/ "'ue'" },
            '& .MuiTypography-root:nth-child(3)::after': { content: /*W*/ "'ed'" },
            '& .MuiTypography-root:nth-child(4)::after': { content: /*T*/ "'hu'" },
            '& .MuiTypography-root:nth-child(5)::after': { content: /*F*/ "'ri'" },
            '& .MuiTypography-root:nth-child(6)::after': { content: /*S*/ "'at'" },
            '& .MuiTypography-root:nth-child(7)::after': { content: /*S*/ "'un'" },
        },
    },
    // hovering over day in day view
    '& button.MuiButtonBase-root.MuiPickersDay-root:not(.Mui-selected):hover': hoverStyles,
    // adjusting days/months view container height
    '& .PrivatePickersSlideTransition-root': { minHeight: 230 },
    // removing cancel and ok buttons
    '& .MuiDialogActions-root': { display: 'none' },
    // change stroke color of today
    '& .MuiPickersDay-today:not(.Mui-selected)': { borderColor: colors.strokeGray },
    // months button styles, year button styles
    '& .PrivatePickersMonth-root, & .PrivatePickersYear-yearButton': {
        border: 'none',
        background: 'white',
        fontFamily: 'Roboto',
        fontSize: '0.875rem',
        width: '100%',
        height: 54,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        flex: '1 0 25%',
        borderRadius: 6,
        '&:hover': hoverStyles,
    },
    // selected month, year
    '& button.PrivatePickersYear-yearButton.Mui-selected, & button.PrivatePickersMonth-root.Mui-selected': {
        color: 'white',
        background: colors.blue,
    },
    // hovering over month/year in month/year view
    '& button.PrivatePickersYear-yearButton:not(.Mui-selected):hover, & button.PrivatePickersMonth-root:not(.Mui-selected):hover':
        hoverStyles,
    // year container
    '& .PrivatePickersFadeTransitionGroup-root.MuiCalendarPicker-viewTransitionContainer': { height: 256 },
    // month view
    '& .MuiMonthPicker-root': {
        margin: '0 0.75rem',
        width: 'unset',
    },
    // year view
    '& .MuiYearPicker-root': {
        margin: '0 0.75rem',
        // shadow on top of scrollable year view
        '&::before': {
            content: "''",
            display: 'block',
            boxShadow: `inset 0px 15px 15px -15px ${colors.strokeGray}`,
            position: 'fixed',
            height: '1rem',
            width: 320,
            pointerEvents: 'none',
            left: '50%',
            marginLeft: -160, // 320/2
        },
    },
    '& div.MuiCalendarPicker-root > div > div > button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall': {
        // < and > arrow buttons
        '&.MuiIconButton-edgeEnd, &.MuiIconButton-edgeStart': {
            width: 30,
            height: 30,
            boxShadow: boxShadows.tile,
            color: 'black',
            '&:hover': { color: colors.blue, boxShadow: boxShadows.dropdown, background: 'white' },
            '&:active': {
                boxShadow: 'none',
                color: colors.blue,
                background: colors.lightBlue,
                transform: 'translateY(2px)',
            },
            '&.Mui-disabled': { color: colors.strokeGray },
        },
        // arrow next to the year/month title
        '&:not(.MuiIconButton-edgeEnd):not(.MuiIconButton-edgeStart)': {
            margin: 0,
            height: 24,
            borderRadius: 0,
            '&:hover': hoverStyles,
        },
    },
    // date title and arrows container
    '& div.MuiCalendarPicker-root > div:first-child:not(.PrivatePickersFadeTransitionGroup-root)': {
        marginTop: 24,
        marginBottom: 20,
        paddingRight: 24,
    },
});
const desktopYearClassName = css({
    // make 3 years appear in each row instead of 4 in desktop picker
    '& div.MuiYearPicker-root > div.PrivatePickersYear-root.PrivatePickersYear-modeDesktop': {
        flexBasis: '33.333%',
    },
});

const inCellClassName = css({
    // make 3 years appear in each row instead of 4 in desktop picker
    '& div.MuiFilledInput-root': {
        border: 0,
        padding: 0,
        borderRadius: 0,
        fontSize: 'inherit',
        background: 'inherit',
        '&.Mui-focused': { boxShadow: 'none' },
        '& > input.MuiInputBase-input': { padding: '0 16px 3px 17px' },
        '& > div.MuiInputAdornment-root': { display: 'none' },
    },
});

const locales = {
    en: 'en-US',
    fr: 'fr',
} as const;

const components: MobileDatePickerProps<any, any>['components'] = {
    LeftArrowIcon: ChevronLeftIcon,
    RightArrowIcon: (props) => <ChevronLeftIcon {...props} sx={{ transform: 'rotate(180deg)' }} />,
    SwitchViewIcon: (props) => <CaretDownIcon {...props} color="disabled" />,
    OpenPickerIcon: (props) => <DateIcon {...props} color="action" />,
};

type DatePickerOnlyProps = Omit<MobileDatePickerProps<DateTime, DateTime>, 'onChange' | 'value' | 'renderInput'>;
export type DatePickerType = 'day' | 'week' | 'month' | 'quarter' | 'year';

export type AppDayPickerProps = Partial<AppFormField> &
    Omit<TextFieldProps, 'margin' | 'type'> &
    DatePickerOnlyProps & {
        // for some reason, the text field margin prop is different from the input margin prop
        margin?: InputProps['margin'];
        type?: DatePickerType;
        onChange?: (value: string | null) => void;
        inCell?: boolean;
    };

const views: Record<DatePickerType, Array<CalendarPickerView>> = {
    day: ['year', 'month', 'day'],
    month: ['year', 'month'],
    year: ['year'],
    quarter: ['year'],
    week: ['year', 'day'],
};

// determines how dates are viewed if successfully validated, output of luxon
const viewFormats: Record<DatePickerType, NonNullable<DatePickerOnlyProps['inputFormat']>> = {
    day: 'MMM dd, yyyy',
    month: 'MMMM yyyy',
    year: 'yyyy',
    quarter: 'yyyy',
    week: "'Week' W, yyyy",
};

// determines the formats the user can use when inputting using a keyboard, input for luxon
const keyboardFormats: Record<DatePickerType, string> = {
    day: 'dd/MM/yyyy',
    month: 'MM/yyyy',
    year: 'yyyy',
    quarter: 'yyyy',
    week: 'WW/kkkk',
};

// easy to understand formats for the user to use the keyboard, no logic operations WSE
const placeholderFormats: Record<DatePickerType, string> = {
    day: 'DD/MM/YYYY',
    month: 'MM/YYYY',
    year: 'YYYY',
    quarter: 'YYYY',
    week: 'WW/YYYY',
};

const defaultLabels: Record<DatePickerType, string> = {
    day: 'Day',
    month: 'Month',
    quarter: 'Year',
    week: 'Week',
    year: 'Year',
};

export const AppDayPicker = ({
    type = 'day',
    name = 'date',
    variant = 'filled',
    margin = 'none',
    fullWidth = true,
    label: _label,
    required,
    onChange,
    onBlur,
    value: _value,
    onClose: _onClose,
    inCell,
    ...props
}: AppDayPickerProps) => {
    const formContext = useFormContext() as UseFormReturn<any, object> | null;

    const { register, watch, setValue, setError, clearErrors, formState } = formContext ?? {
        setValue: (_name, value) => onChange?.(value),
    };

    const { errors } = (formState ?? { errors: {} }) as NonNullable<typeof formState>;
    const error = getErrorByPath(errors, name);

    const value = watch?.(name) ?? _value;
    // keep track of the initial value
    // remove label when the picker is in a table cell
    const label = inCell ? undefined : _label ?? defaultLabels[type];
    // first day of current month in day view when you open the picker
    // changes when you flip through months without selecting a new date
    // we keep track of the month in view to change the W## accordingly
    const [month, setMonth] = useState<DateTime>(stringToDateTime(value ?? '').startOf('month'));
    // the date you hover on in week view, used to set the color of the whole week to light green on hover
    const [hover, setHover] = useState<DateTime | null>(null);
    // represents the DateTime value that corresponds with the string value
    // we keep track of the value as a DateTime to determine if the component is in an error state
    // if it's null, it means the field is empty, hence no error
    // if it's not null, we check DateTime.isValid
    const [valueDate, setValueDate] = useState<DateTime | null>(stringToDateTime(value ?? ''));
    // keeping track of the last valid value, to revert to if the user enters an incomplete value
    const [lastValidValue, setLastValidValue] = useState<DateTime | null>(null);
    useEffect(() => {
        valueDate && valueDate.isValid && setLastValidValue(valueDate);
    }, [valueDate]);
    // picker dialog state
    const [open, setOpen] = useState(false);
    // choose picker type based on screen size
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));
    const DatePicker: FC<MobileDatePickerProps<DateTime, DateTime>> = mobile ? MobileDatePicker : DesktopDatePicker;
    // refers to the root html div element
    const ref = useRef<HTMLDivElement>(null);
    // const focusOnTextField = () => {
    // 	const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && /apple/i.test(navigator.vendor);
    // 	// select the input and focus on it, after the popper apears, hence the setTimeout(, 0)
    // 	setTimeout(
    // 		() => ref.current?.querySelector<HTMLInputElement>('input.MuiInputBase-input')?.focus(),
    // 		// Safari does something that prevents the focus() method from working right away
    // 		// so increasing the timeout just for Safari, as it leads to stutters in Chrome
    // 		isSafari ? 100 : 0
    // 	);
    // };
    // after opening the picker dialog, we focus on the text field so the user can immediately use the keyboard
    const openPicker = useCallback(() => {
        setOpen(true);
        // focusOnTextField();
    }, []);
    // close and unmount picker, then commit table editing changes
    const onClose = () => inCell && setTimeout(_onClose as () => void, 0);
    // onClose comes from the table editing cell and it unmounts the picker,
    // so we don't set it to true when we close the picker if the user enters a value by keyboard
    // as it's counter-intuitive
    const closePicker = (runOnClose = true) => {
        setOpen(false);
        runOnClose && onClose();
    };
    // Open date picker once it's mounted when the table editable cell is clicked
    useEffect(() => {
        inCell && openPicker();
    }, [inCell, openPicker]);

    const fieldProps = register?.(name);
    // picker component
    const datePicker = (
        <LocalizationProvider dateAdapter={AdapterLuxon} locale={locales.en}>
            <DatePicker
                {...fieldProps}
                // open to year view
                openTo={value ? views[type][views[type].length - 1] : views[type][0]}
                // openTo={views[type][views[type].length - 1]}
                views={views[type]}
                // only works for day picker
                // if you log the textField params, you'll find that params.inputProps.type will be "tel" if the type is day
                inputFormat={keyboardFormats[type]}
                value={valueDate}
                onChange={(_date: DateTime | null, keyboardInputValue?: string) => {
                    // custom format for day picker from keyboard input
                    const dateFromString = DateTime.fromFormat(keyboardInputValue ?? '', keyboardFormats[type]);
                    const date = dateFromString.isValid ? dateFromString : _date;
                    setValueDate(date);
                    if (date?.isValid) {
                        // reset error
                        clearErrors?.(name);
                        // set value
                        const dateString = dateTimeToString(date);
                        setValue(name, dateString);
                        setMonth(stringToDateTime(startOfPeriod(dateString, DisplayPeriod.Months)));
                    } else {
                        !keyboardInputValue && setError?.(name, { message: 'Invalid date' });
                        setValue(name, keyboardInputValue || null);
                    }
                }}
                // controlled states
                open={open}
                // @dev: uncomment to keep open
                // open
                onClose={closePicker}
                onOpen={openPicker}
                // custom input compnent
                renderInput={(params: TextFieldProps) => (
                    <div>
                        <TextField
                            {...params}
                            ref={ref}
                            sx={{ width: fullWidth || type === 'quarter' ? '100%' : 'auto' }}
                            error={Boolean(error)}
                            variant={variant}
                            margin={margin}
                            id={`date-picker-dialog-${name}`}
                            required={required}
                            onClick={openPicker}
                            // className for when the date picker is put inside a cell
                            className={inCell ? inCellClassName : undefined}
                            InputProps={{
                                ...params.InputProps,
                                inputProps: {
                                    ...params.inputProps,
                                    // force value to be in the keyboard format while picker is open,
                                    // and in view format while it's closed and value entered by keyboard is valid
                                    onBlur: (e) => {
                                        // validate table changes once the text field is blurred
                                        if (inCell && !mobile && !open) onClose();
                                        // if the user enters an incomplete or invalid value, it'll revert to the last valid one if exists
                                        if (valueDate && !valueDate.isValid && lastValidValue) {
                                            setValueDate(lastValidValue);
                                            setValue(name, dateTimeToString(lastValidValue));
                                        }
                                        // component caller props onBlur
                                        onBlur?.(e);
                                        params.inputProps?.onBlur?.(e);
                                    },
                                    ...(valueDate?.isValid && {
                                        value: valueDate.toFormat(open ? keyboardFormats[type] : viewFormats[type]),
                                    }),
                                    autoComplete: 'no',
                                    onChange: (e) => {
                                        params.inputProps?.onChange?.(e);
                                        // if the user deletes the value by keyboard, clear it and set or clear the field error
                                        // @ts-ignore
                                        if (!(e.target as HTMLInputElement).value) {
                                            setValueDate(null);
                                            setValue(name, null);
                                            required
                                                ? setError?.(name, { message: label + ' is required' })
                                                : clearErrors?.(name);
                                        }
                                    },
                                    // placeholder: lastValidValue?.toFormat(viewFormats[type]) ?? placeholderFormats[type],
                                    placeholder: placeholderFormats[type],
                                    // if inside a table cell and the user presses Tab or Enter, validate and commit editing changes
                                    onKeyDown: (e) => inCell && (e.key === 'Tab' || e.key === 'Enter') && closePicker(),
                                    // close picker if user successfully enters a date by keyboard, or clears the value
                                    // we're also adding an exception for ctrl + a
                                    onKeyUp: ({ key }) => {
                                        if (
                                            key !== 'a' &&
                                            key !== 'Control' &&
                                            (valueDate?.isValid || valueDate === null)
                                        )
                                            closePicker(false);
                                    },
                                    ...(type === 'week' && { readOnly: true, style: { cursor: 'pointer' } }),
                                },
                            }}
                        />
                        <ErrorText error={error} indent />
                    </div>
                )}
                label={label}
                showToolbar={false}
                {...(mobile && {
                    DialogProps: { className: clsx(pickerClassName, type === 'week' && weeksClassName(month)) },
                })}
                {...(!mobile && {
                    PaperProps: {
                        className: clsx(
                            pickerClassName,
                            desktopYearClassName,
                            type === 'week' && weeksClassName(month)
                        ),
                    },
                })}
                // week picker changes
                {...(type === 'week' && {
                    renderDay: (
                        day: DateTime,
                        selectedDates: (DateTime | null)[],
                        pickersDayProps: PickersDayProps<DateTime>
                    ) => renderWeekPickerDay(day, selectedDates, pickersDayProps, hover, setHover, month),
                })}
                // set the current month in view whenever it changes
                onMonthChange={setMonth}
                // override switch view button and arrows
                components={components}
                // allow caller to override props
                {...(props as DatePickerOnlyProps)}
            />
        </LocalizationProvider>
    );

    return type === 'quarter' ? (
        <MultiInputRow fullWidth={fullWidth}>
            <AppTextField margin={margin} name="quarter" label="Quarter" select required={required} variant={variant}>
                {[...Array(4)].map((_i, i) => (
                    <MenuItem key={i} value={i + 1}>
                        Q{i + 1}
                    </MenuItem>
                ))}
            </AppTextField>

            {datePicker}
        </MultiInputRow>
    ) : (
        datePicker
    );
};

type CustomPickerDayProps = PickersDayProps<DateTime> & {
    dayIsBetween: boolean;
    isFirstDay: boolean;
    isLastDay: boolean;
};

const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) => prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})<CustomPickerDayProps>(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
    ...(dayIsBetween && {
        borderRadius: 0,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.primary.dark,
        },
    }),
    ...(isFirstDay && {
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
    }),
    ...(isLastDay && {
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
    }),
})) as ComponentType<CustomPickerDayProps>;

const renderWeekPickerDay = (
    date: DateTime,
    selectedDates: Array<DateTime | null>,
    pickersDayProps: PickersDayProps<DateTime>,
    hover: DateTime | null,
    setHover: Dispatch<SetStateAction<DateTime | null>>,
    month: DateTime
) => {
    const value = selectedDates[0];
    if (!value) return <PickersDay {...pickersDayProps} />;

    const selectedWeek = value.weekNumber;
    const hoverWeek = hover?.weekNumber;
    const dateWeek = date.weekNumber;

    const startOfSelectedWeek = startOfPeriod(value, DisplayPeriod.Weeks);
    const endOfSelectedWeek = endOfPeriod(value, DisplayPeriod.Weeks);

    const dayInSelectedWeek = selectedWeek === dateWeek;
    const isFirstDayOfWeek = isSameDay(date, startOfSelectedWeek);
    const isLastDayOfWeek = isSameDay(date, endOfSelectedWeek);

    const startOfHoverWeek = hover && startOfPeriod(hover, DisplayPeriod.Weeks);
    const endOfHoverWeek = hover && endOfPeriod(hover, DisplayPeriod.Weeks);
    const dayInHoverWeek = hover && hoverWeek === dateWeek;

    const isFirstDayOfHoverWeek = hover && isSameDay(date, startOfHoverWeek!);
    const isLastDayOfHoverWeek = hover && isSameDay(date, endOfHoverWeek!);

    const outsideCurrentMonth = !isWithinInterval(date, { start: month, end: month.endOf('month') });
    const { day, onDaySelect, key } = pickersDayProps;
    return (
        <CustomPickersDay
            {...{ day, onDaySelect, key }}
            disableMargin
            dayIsBetween={dayInSelectedWeek}
            isFirstDay={isFirstDayOfWeek}
            isLastDay={isLastDayOfWeek}
            onMouseEnter={() => setHover(date)}
            onMouseLeave={() => setHover(null)}
            showDaysOutsideCurrentMonth
            outsideCurrentMonth={false}
            sx={{
                background: dayInSelectedWeek
                    ? `${colors.blue} !important`
                    : dayInHoverWeek
                    ? `${colors.ultraLightGreen} !important`
                    : 'white',
                // show days outside the month in gray
                color: outsideCurrentMonth
                    ? `${colors.mediumGray} !important`
                    : dayInSelectedWeek
                    ? 'white !important'
                    : dayInHoverWeek
                    ? `${colors.green} !important`
                    : 'black !important',
                borderRadius:
                    isFirstDayOfWeek || isFirstDayOfHoverWeek
                        ? '20% 0 0 20%'
                        : isLastDayOfWeek || isLastDayOfHoverWeek
                        ? '0 20% 20% 0'
                        : 0,
                transition: 'none !important',
            }}
        />
    );
};

const formatWeek = (week: number) => `"W${String(week).padStart(2, '0')}"`;
const weeksClassName = (date: DateTime | null) => {
    if (!date || !date.isValid) return;

    const weeks = [...Array(6)].map((_i, i) => date.plus({ weeks: i }).weekNumber);
    return css({
        // shift headers to the right to accommodate for the W## added on the left in week rows
        '& div.MuiCalendarPicker-root > .MuiCalendarPicker-viewTransitionContainer > div > div:first-child:not(.MuiMonthPicker-root):not(.MuiYearPicker-root)':
            {
                marginLeft: 32,
                // disable weekday headers margins
                '& .MuiTypography-root': { margin: 0 },
            },
        // change stroke color of today
        '& .MuiPickersDay-today:not(.Mui-selected)': { border: 'none' },
        // show W## on the left of weeks
        "& .PrivatePickersSlideTransition-root > div[role='grid']": {
            '& > div[role="row"]::before': { alignSelf: 'center', fontSize: 10, marginRight: 8 },
            // add W## to before content
            '& > div[role="row"]:nth-child(1)::before': { content: formatWeek(weeks[0]) },
            '& > div[role="row"]:nth-child(2)::before': { content: formatWeek(weeks[1]) },
            '& > div[role="row"]:nth-child(3)::before': { content: formatWeek(weeks[2]) },
            '& > div[role="row"]:nth-child(4)::before': { content: formatWeek(weeks[3]) },
            '& > div[role="row"]:nth-child(5)::before': { content: formatWeek(weeks[4]) },
            '& > div[role="row"]:nth-child(6)::before': { content: formatWeek(weeks[5]) },
        },
    });
};
