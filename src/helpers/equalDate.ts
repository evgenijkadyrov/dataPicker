import { IMinMaxDate } from "@/components/CalendarHeader";

export const equalDate = (date1: IMinMaxDate | null, date2: IMinMaxDate | null) => {
    if (!date1 || !date2) return false;
    return date1.month === date2.month && date1.year === date2.year;
};
