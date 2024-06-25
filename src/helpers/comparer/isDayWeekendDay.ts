import { IDate } from "@/interfaces/interfaces";

export const isDayWeekendDay = (date: IDate) => {
    const dayOfWeek = new Date(date.year, date.month, date.day).getDay();
    return dayOfWeek === 6 || dayOfWeek === 0;
};
