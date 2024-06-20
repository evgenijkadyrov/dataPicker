import { IDate } from "@/interfaces/interfaces";

export const isDateInRange = (date: IDate, startDate: IDate, endDate: IDate) => {
    if (!date || !startDate || !endDate) {
        return false;
    }
    const start = new Date(startDate.year, startDate.month - 1, startDate.day + 1);
    const end = new Date(endDate.year, endDate.month - 1, endDate.day - 1);
    const checkDate = new Date(date.year, date.month - 1, date.day);

    return checkDate >= start && checkDate <= end;
};
