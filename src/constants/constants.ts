import { IMinMaxDate } from "@/interfaces";

export const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export enum StartDayOfWeek {
    Monday = "Monday",
    Sunday = "Sunday",
}

export const SHORT_DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const numbersArray: number[] = [];
for (let i = 1; i <= 30; i += 1) {
    numbersArray.push(i);
}

export interface IHolidayDate {
    month: number;
    day: number;
}
export const HOLIDAYS_IN_BELARUS = [
    { month: 1, day: 1 },
    { month: 1, day: 7 },
    { month: 3, day: 8 },
    { month: 4, day: 25 },
    { month: 5, day: 1 },
    { month: 5, day: 9 },
    { month: 7, day: 3 },
    { month: 11, day: 7 },
    { month: 12, day: 25 },
];
export const DEFAULT_MIN_DATE: IMinMaxDate = { year: 2010, month: 1 };
export const DEFAULT_MAX_DATE: IMinMaxDate = { year: 2030, month: 11 };

export const LAST_MONTH_IN_YEAR = 11;
export const FIRST_MONTH_IN_YEAR = 0;

export const FIRST_DAY_IN_MONTH = 1;
export const WEEK_LENGTH = 7;
