import { IDate, ISelectedDate } from "@/interfaces";

export const compareDate = (
    date1: IDate | undefined,
    date2: ISelectedDate | undefined
): boolean => {
    if (!date1 || !date2) {
        return false;
    }
    return (
        date1.day === date2.day &&
        date1.month === date2.month &&
        date1.year === date2.year
    );
};
