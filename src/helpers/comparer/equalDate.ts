import { IDate, IMinMaxDate } from "@/interfaces";

export const equalDate = (date1: IMinMaxDate | undefined, date2: IDate | undefined) => {
    if (!date1 || !date2) return false;
    return date1.month === date2.month && date1.year === date2.year;
};
