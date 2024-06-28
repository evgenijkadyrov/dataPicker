import { FIRST_MONTH_IN_YEAR, LAST_MONTH_IN_YEAR } from "@/constants";

export const getNextMonthAndYear = (
    month: number,
    year: number
): { nextMonth: number; nextYear: number } => {
    const nextMonth = month === LAST_MONTH_IN_YEAR ? FIRST_MONTH_IN_YEAR : month + 1;
    const nextYear = month === LAST_MONTH_IN_YEAR ? year + 1 : year;

    return { nextMonth, nextYear };
};

export const getPreviousMonthAndYear = (
    month: number,
    year: number
): { prevMonth: number; prevYear: number } => {
    const prevMonth = month === FIRST_MONTH_IN_YEAR ? LAST_MONTH_IN_YEAR : month - 1;
    const prevYear = month === FIRST_MONTH_IN_YEAR ? year - 1 : year;

    return { prevMonth, prevYear };
};
export const getDaysInMonth = (year: number, month: number): number =>
    new Date(year, month + 1, 0).getDate();
