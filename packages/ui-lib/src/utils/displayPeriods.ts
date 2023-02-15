export enum DisplayPeriod {
    Days = 'days',
    Months = 'months',
    Quarters = 'quarters',
    Weeks = 'weeks',
    Years = 'years',
}

export const displayPeriods = {
    [DisplayPeriod.Days]: 'Day',
    [DisplayPeriod.Weeks]: 'Week',
    [DisplayPeriod.Months]: 'Month',
    [DisplayPeriod.Quarters]: 'Quarter',
    [DisplayPeriod.Years]: 'Year',
};
