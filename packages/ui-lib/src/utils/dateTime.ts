import { DisplayPeriod } from './displayPeriods';
import { DateTime, DateTimeUnit, Info, Interval } from 'luxon';

export enum ActualsDateRangeFilterOption {
    Custom = 1,

    ThisMonth,
    ThisYear,
    ThisFiscalYear,

    Last7Days,
    Last30Days,
    Last12Months,

    LastWeek,
    LastMonth,
    LastQuarter,
    LastYear,
    LastFiscalYear,

    None,
}

export enum ForecastsDateRangeFilterOption {
    Auto = 1,

    Custom,

    ThisMonth,
    ThisYear,
    ThisFiscalYear,

    Next7Days,
    Next30Days,
    Next6Months,

    UntilNextWeek,
    UntilNextMonth,
    UntilNextQuarter,
    UntilNextYear,
    UntilNextFiscalYear,

    None,
}

export type AppStateActualDates = { value: ActualsDateRangeFilterOption; start: string; end: string };
export type AppStateForecastDates = {
    value: ForecastsDateRangeFilterOption;
    start: string;
    end: string;
    auto: boolean;
};
export type AppStateTimeUnit = { value: DisplayPeriod; auto: boolean };

export interface AppDates {
    actuals: AppStateActualDates;
    forecasts: AppStateForecastDates;
    timeUnit: AppStateTimeUnit;
}

// Constants
const ID_DATE_FORMAT = 'yyyyMMdd'; // 20201014
const DATE_FORMAT = 'dd/MM/yyyy'; // 20201014
const ID_DATE_YEAR_FORMAT = 'yyyy'; // 2020
const ID_DATE_QUARTER_FORMAT = 'yyyyqq'; // 202003
const ID_DATE_MONTH_FORMAT = 'yyyyMM'; //202012
const ID_DATE_WEEK_FORMAT = 'yyyyWW'; // 202035
const GQL_DATE_FORMAT = 'yyyy-MM-dd'; // 2020-10-14
const SALARY_DATE_FORMAT = 'dd/MM/yyyy'; // 2020-10-14
const DAY_CHART_DATE_FORMAT = 'dd-LLL'; // 03 Jan
const WEEK_YEAR_FORMAT = 'weekW yyyy'; // week25 2020
const WEEK_YEAR_TOOLTIP_FORMAT = 'wW, yyyy'; // week25 2020
const QUARTER_YEAR_FORMAT = 'Qq yyyy'; // 4Q 2020
const QUARTER_YEAR_TOOLTIP_FORMAT = 'Qq, yyyy'; // 4Q 2020
const LOCALIZED_SHORT_DATE_FORMAT = 'D'; // 14/10/2020
const LOCALIZED_ABBREV_MONTH_DATE_FORMAT = 'DD'; // Oct 14, 2020
const LOCALIZED_FULL_MONTH_DATE_FORMAT = 'DDD'; // October 14, 2020
const LOCAL_SHORT_MONTH_YEAR_FORMAT = 'LLL yyyy'; // Oct 2020
const LOCAL_LONG_MONTH_YEAR_FORMAT = 'LLLL yyyy'; // October 2020
const MONTH_YEAR_DATE_FORMAT = 'MM/yyyy'; // 10/2020

const displayPeriodToDateTimeUnitMap: Record<DisplayPeriod, DateTimeUnit> = {
    days: 'day',
    months: 'month',
    quarters: 'quarter',
    weeks: 'week',
    years: 'year',
};

// Convert Date object to GQL format string
export const dateToString = (date: Date) => DateTime.fromJSDate(date).toFormat(GQL_DATE_FORMAT); // returns string
// Convert Date object to DateTime Object
export const dateToDateTime = (date: Date) => DateTime.fromJSDate(date); // returns a DateTime object
// Convert String to DateTime Object
export const stringToDateTime = (date: string, ignoreTimeZone = false) =>
    DateTime.fromISO(date, ignoreTimeZone ? { zone: 'utc' } : {}); // returns a DateTime object

export const stringToDate = (date: string) => new Date(stringToDateTime(date).toISO());

export const dateTimeToString = (date: DateTime) => date.toFormat(GQL_DATE_FORMAT);

// Convert from Format to GQL Date
export const convertStringFormatToGqlDate = (date: string, format: string) =>
    DateTime.fromFormat(date, format).toFormat(GQL_DATE_FORMAT);

// Formatting Dates

export const displayShortDate = (date: string) => stringToDateTime(date).toFormat(LOCALIZED_SHORT_DATE_FORMAT);
export const displaySalaryShortDate = (date: string) => stringToDateTime(date).toFormat(SALARY_DATE_FORMAT);

export const shortWeekNames = () => Info.weekdays('short');

export const longWeekNames = () => Info.weekdays('long');

export const longMonthNames = () => Info.months('long');

export const getDaysInMonth = (date: string) => stringToDateTime(date).daysInMonth;

export const displayDateWithAbbreviatedMonth = (date: string) =>
    stringToDateTime(date).toFormat(LOCALIZED_ABBREV_MONTH_DATE_FORMAT);

export const displayDateWithFullMonth = (date: string) =>
    stringToDateTime(date).toFormat(LOCALIZED_FULL_MONTH_DATE_FORMAT);

export const displayDateSlashSeparated = (date: string) => stringToDateTime(date).toFormat(DATE_FORMAT);

export const displayIDDateFormat = (date: string) => stringToDateTime(date).toFormat(ID_DATE_FORMAT);

export const displayGqlDateFormat = (date: string): string => stringToDateTime(date).toFormat(GQL_DATE_FORMAT);

export const stringToLocalShortMonthYear = (date: string) =>
    stringToDateTime(date).toFormat(LOCAL_SHORT_MONTH_YEAR_FORMAT);

export const stringToLocalLongMonthYear = (date: string) =>
    stringToDateTime(date).toFormat(LOCAL_LONG_MONTH_YEAR_FORMAT);

export const stringToMonthYear = (date: string) => stringToDateTime(date).toFormat(MONTH_YEAR_DATE_FORMAT);

export const displayDayChartDate = (date: string) => stringToDateTime(date).toFormat(DAY_CHART_DATE_FORMAT);

export const displayQuarterYearDate = (date: string) => stringToDateTime(date).toFormat(QUARTER_YEAR_FORMAT);

export const displayQuarterYearDateTooltip = (date: string) =>
    stringToDateTime(date).toFormat(QUARTER_YEAR_TOOLTIP_FORMAT);

export const displayWeekYearDate = (date: string) => stringToDateTime(date).toFormat(WEEK_YEAR_FORMAT);

export const displayWeekYearDateTooltip = (date: string) => stringToDateTime(date).toFormat(WEEK_YEAR_TOOLTIP_FORMAT);

export const displayYearDate = (date: string) => stringToDateTime(date).toFormat(ID_DATE_YEAR_FORMAT);

export const addPeriods = (date: string, numberToAdd: number, displayPeriod: DisplayPeriod) =>
    stringToDateTime(date)
        .plus({ [displayPeriod]: numberToAdd })
        .toFormat(GQL_DATE_FORMAT);

export const isEqual = (startDate: string, endDate: string) =>
    stringToDateTime(startDate).hasSame(stringToDateTime(endDate), 'day');

export const isBefore = (startDate: string, endDate: string) =>
    stringToDateTime(startDate).startOf('day') < stringToDateTime(endDate).startOf('day');

export const isAfter = (startDate: string, endDate: string) =>
    stringToDateTime(startDate).startOf('day') > stringToDateTime(endDate).startOf('day');

export const isBeforeOrEqual = (startDate: string, endDate: string) =>
    stringToDateTime(startDate).startOf('day') <= stringToDateTime(endDate).startOf('day');

export const isAfterOrEqual = (startDate: string, endDate: string) =>
    stringToDateTime(startDate).startOf('day') >= stringToDateTime(endDate).startOf('day');

export const isBetween = (startDate: string, endDate: string, dateToCompare: string) =>
    Interval.fromDateTimes(stringToDateTime(startDate), stringToDateTime(endDate)).contains(
        stringToDateTime(dateToCompare)
    );

export const getDifference = (startDate: string, endDate: string, displayPeriod?: DisplayPeriod) => {
    if (!displayPeriod) return stringToDateTime(endDate).valueOf() - stringToDateTime(startDate).valueOf();
    return Math.abs(
        Math.round(stringToDateTime(endDate).diff(stringToDateTime(startDate), displayPeriod)[displayPeriod])
    );
};

export const getSalaryDifference = (startDate: string, endDate: string, displayPeriod?: DisplayPeriod) => {
    if (!displayPeriod) return stringToDateTime(endDate).valueOf() - stringToDateTime(startDate).valueOf();
    return Math[displayPeriod === DisplayPeriod.Years || displayPeriod === DisplayPeriod.Weeks ? 'round' : 'floor'](
        stringToDateTime(endDate).diff(stringToDateTime(startDate), displayPeriod)[displayPeriod]
    );
};

export const getDaysFromToday = (date: string) => DateTime.now().diff(stringToDateTime(date), DisplayPeriod.Days).days;

export const getTimeRelativeToNow = (date: string) => stringToDateTime(date).toRelative();

export const getTodayDate = () => DateTime.now().toFormat(GQL_DATE_FORMAT);

export const getMinimumDate = (startDate: string, endDate: string) =>
    DateTime.min(stringToDateTime(startDate), stringToDateTime(endDate));

export const trialWarningShownMoreThanOneDayAgo = (date: string) =>
    DateTime.now().diff(stringToDateTime(date), DisplayPeriod.Days).hours >= 24;

export const convertToIsoDate = (date: string) => stringToDateTime(date).toISO();

export const getYear = (date: string) => stringToDateTime(date).year;
export const getQuarter = (date: string) => stringToDateTime(date).quarter;

export const getFullDateWithTime = (date: string) =>
    stringToDateTime(date).toLocaleString({ day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });

type StartOfPeriod = {
    (date: string, displayPeriod: DisplayPeriod, ignoreTimeZone?: boolean): string;
    (date: DateTime, displayPeriod: DisplayPeriod, ignoreTimeZone?: boolean): string;
};
export const startOfPeriod: StartOfPeriod = (date, displayPeriod, ignoreTimeZone) =>
    (typeof date === 'string' ? stringToDateTime(date, ignoreTimeZone) : date)
        .startOf(displayPeriodToDateTimeUnitMap[displayPeriod])
        .toFormat(GQL_DATE_FORMAT);

type EndOfPeriod = {
    (date: string, displayPeriod: DisplayPeriod, ignoreTimeZone?: boolean): string;
    (date: DateTime, displayPeriod: DisplayPeriod, ignoreTimeZone?: boolean): string;
};

export const endOfPeriod: EndOfPeriod = (date, displayPeriod, ignoreTimeZone = false) =>
    (typeof date === 'string' ? stringToDateTime(date, ignoreTimeZone) : date)
        .endOf(displayPeriodToDateTimeUnitMap[displayPeriod])
        .toFormat(GQL_DATE_FORMAT);

export const getPeriodKey = (date: string, displayPeriod: DisplayPeriod) => {
    switch (displayPeriod) {
        case DisplayPeriod.Years:
            return stringToDateTime(date).toFormat(ID_DATE_YEAR_FORMAT);
        case DisplayPeriod.Quarters:
            return stringToDateTime(date).toFormat(ID_DATE_QUARTER_FORMAT);
        case DisplayPeriod.Months:
            return stringToDateTime(date).toFormat(ID_DATE_MONTH_FORMAT);
        case DisplayPeriod.Weeks:
            return stringToDateTime(date).toFormat(ID_DATE_WEEK_FORMAT);
        default:
            return stringToDateTime(date).toFormat(ID_DATE_FORMAT);
    }
};

export const getPeriodFormattedDate = (date: string, displayPeriod: DisplayPeriod) => {
    switch (displayPeriod) {
        case DisplayPeriod.Years:
            return stringToDateTime(date).toFormat(ID_DATE_YEAR_FORMAT);
        case DisplayPeriod.Quarters:
            return stringToDateTime(date).toFormat(QUARTER_YEAR_FORMAT);
        case DisplayPeriod.Months:
            return stringToDateTime(date).toFormat(LOCAL_SHORT_MONTH_YEAR_FORMAT);
        case DisplayPeriod.Weeks:
            return stringToDateTime(date).toFormat(WEEK_YEAR_FORMAT);
        case DisplayPeriod.Days:
            return stringToDateTime(date).toFormat(LOCALIZED_ABBREV_MONTH_DATE_FORMAT);
        default:
            return stringToDateTime(date).toFormat(LOCAL_SHORT_MONTH_YEAR_FORMAT);
    }
};

export const generateSteps = (startDate: string, endDate: string, displayPeriod: DisplayPeriod) => {
    const diff = getDifference(
        startOfPeriod(startDate, DisplayPeriod.Months),
        endOfPeriod(endDate, DisplayPeriod.Months),
        displayPeriod
    );
    return new Array(diff).fill(0).map((e, i) => displayGqlDateFormat(addPeriods(startDate, i, displayPeriod)));
};

export const displayCSVDate = () => DateTime.now().toLocaleString(DateTime.DATETIME_MED);

// export const spreadData = <D, T>(
// 	startDate: string,
// 	endDate: string,
// 	displayPeriod: DisplayPeriod,
// 	data: Record<string, D>,
// 	processor: (data: D) => T,
// 	freq = 1
// ): Array<{ key: string } & T> => {
// 	const spread = [];
// 	let day = endOfPeriod(startDate, displayPeriod);
// 	while (getDifference(day, endOfPeriod(endDate, displayPeriod)) >= 0) {
// 		spread.push({
// 			key: day,
// 			...processor(data[day]),
// 		});
// 		day = endOfPeriod(addPeriods(day, freq, displayPeriod), displayPeriod);
// 	}
// 	return spread;
// };

export const getDateRange = (start: string, end: string, period: DisplayPeriod, freq = 1) => {
    const diff = getSalaryDifference(
        period === DisplayPeriod.Weeks ? start : startOfPeriod(start, period),
        endOfPeriod(period === DisplayPeriod.Quarters ? end : addPeriods(end, 1, DisplayPeriod.Days), period),
        period
    );
    return new Array(diff === 0 || isNaN(diff) || diff < 0 ? 0 : Math.ceil(diff / freq))
        .fill(0)
        .map((_, i) =>
            period === DisplayPeriod.Months
                ? endOfPeriod(addPeriods(start, freq * i, period), period)
                : addPeriods(start, freq * i, period)
        );
};

export const createIdFromAppDates = (dates: AppDates) =>
    [
        dates.actuals.start && displayIDDateFormat(dates.actuals.start),
        dates.forecasts.end && displayIDDateFormat(dates.forecasts.end),
        dates.actuals.end && displayIDDateFormat(dates.actuals.end),
    ].join(':');

export const getDateDiff = (day1: string, day2: string) => new Date(day1).getTime() - new Date(day2).getTime();

export const getLatestDate = (dates: string[]) =>
    DateTime.max(...dates.map((date) => stringToDateTime(date))).toFormat(GQL_DATE_FORMAT);

export const getLocalizedDate = (date: DateTime) => date.toLocaleString(); // returns string

export const convertUnixToDateWithFullMonth = (date: number) =>
    DateTime.fromSeconds(date).toFormat(LOCALIZED_FULL_MONTH_DATE_FORMAT);

type IsWithinInterval = {
    (date: DateTime | string, { start, end }: { start: DateTime | string; end: DateTime | string }): boolean;
};
export const isWithinInterval: IsWithinInterval = (_date, { start, end }) => {
    const date = typeof _date === 'string' ? stringToDateTime(_date) : _date;
    return (
        date.startOf('day') >= (typeof start === 'string' ? stringToDateTime(start) : start).startOf('day') &&
        date.startOf('day') <= (typeof end === 'string' ? stringToDateTime(end) : end).startOf('day')
    );
};

type IsSameDay = { (date1?: DateTime | string | null, date2?: DateTime | string | null): boolean };
export const isSameDay: IsSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;
    return (
        (typeof date1 === 'string' ? date1 : dateTimeToString(date1)) ===
        (typeof date2 === 'string' ? date2 : dateTimeToString(date2))
    );
};
