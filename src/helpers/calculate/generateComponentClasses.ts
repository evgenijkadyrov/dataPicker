import classNames from "classnames";

import { IColors } from "@/components/Calendar/calendar.interface";
import { IHolidayDate } from "@/constants";
import {
    compareDate,
    isDateInRange,
    isDayHaveTodo,
    isDayHoliday,
    isDayWeekendDay,
} from "@/helpers";
import { IDate, ISelectedDate } from "@/interfaces";

export interface IProps {
    date: IDate;
    isCurrentMonth: boolean;
    color?: IColors;
    selectedDate?: ISelectedDate;
    showHolidays?: boolean;
    holidays?: IHolidayDate[];
    showWeekends?: boolean;
    showDaysWithTask?: boolean;
    startDate?: ISelectedDate;
    endDate?: ISelectedDate;
}
export const generateComponentClasses = ({
    date,
    isCurrentMonth,
    color,
    selectedDate,
    showHolidays,
    holidays,
    showWeekends,
    showDaysWithTask,
    startDate,
    endDate,
}: IProps) =>
    classNames("day", "button", {
        "day-primary": color === "primary",
        "day-success": color === "success",
        "day-default": color === "default",
        "day-disabled": !isCurrentMonth,
        "day-selected": compareDate(date, selectedDate),
        "day-holiday": showHolidays && isDayHoliday(date, holidays),
        "day-weekend": showWeekends && isDayWeekendDay(date),
        "day-withTask": showDaysWithTask && isDayHaveTodo(date),
        "day-start": compareDate(date, startDate),
        "day-end": compareDate(date, endDate),
        "day-range": isDateInRange(date, startDate, endDate),
    });
