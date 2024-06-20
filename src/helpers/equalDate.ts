import { IMinMaxDate } from "@/components/CalendarHeader";
import { IDate } from "@/interfaces/interfaces";

export const equalDate = (date1: IMinMaxDate, date2: IDate | null) => {
    if (!date1 || !date2) return false;
    return date1.month === date2.month && date1.year === date2.year;
};
