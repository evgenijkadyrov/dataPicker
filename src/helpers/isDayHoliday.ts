import { IHolidayDate } from "@/constants/constants";
import { IDate } from "@/interfaces/interfaces";

export const isDayHoliday = (date: IDate, holidays: IHolidayDate[] | undefined) =>
    holidays?.some(
        (holiday) => holiday.month - 1 === date.month && holiday.day === date.day
    );
