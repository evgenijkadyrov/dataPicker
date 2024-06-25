import { IHolidayDate } from "@/constants/constants";
import { IDate } from "@/interfaces/interfaces";

export const isDayHoliday = (date: IDate, holidays: IHolidayDate[] | undefined) => {
    if (holidays === undefined) return false;
    return holidays.some(
        (holiday) => holiday.month - 1 === date.month && holiday.day === date.day
    );
};
