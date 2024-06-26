import { IDate, ISelectedDate } from "@/interfaces";

export const compareDateForTodo = (
    date1: IDate | undefined,
    date2: ISelectedDate | undefined
): boolean => {
    if (!date1 || !date2) {
        return false;
    }

    const date1Ms = new Date(date1.year, date1.month, date1.day).getTime();
    let date2Ms = 0;
    if (
        typeof date2.year === "number" &&
        typeof date2.month === "number" &&
        typeof date2.day === "number"
    ) {
        date2Ms = new Date(date2.year, date2.month, date2.day).getTime();
    }

    return date1Ms <= date2Ms;
};
