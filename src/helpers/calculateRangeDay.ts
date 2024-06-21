import { IDate, ISelectedDate } from "@/interfaces/interfaces";

export const isDateInRange = (
    date: IDate,
    startDate: ISelectedDate | undefined,
    endDate: ISelectedDate | undefined
) => {
    if (!date || !startDate || !endDate) {
        return false;
    }

    let start: Date | undefined;
    let end: Date | undefined;

    if (typeof startDate.year === "number") {
        start = new Date(startDate.year, startDate.month - 1, startDate.day + 1);
    }

    if (typeof endDate.year === "number") {
        end = new Date(endDate.year, endDate.month - 1, endDate.day - 1);
    }

    const checkDate = new Date(date.year, date.month - 1, date.day);

    return start && end && checkDate >= start && checkDate <= end;
};
