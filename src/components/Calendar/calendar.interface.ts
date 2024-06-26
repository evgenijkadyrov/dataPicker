import { Dispatch, ReactElement, SetStateAction, SyntheticEvent } from "react";

import { IHolidayDate, StartDayOfWeek } from "@/constants/constants";
import { IDate, IMinMaxDate, ISelectedDate } from "@/interfaces/interfaces";

export type IColors = "success" | "primary" | "default";
export interface ICalendarProps {
    shownDate?: IDate;
    selectedDate?: ISelectedDate;
    maxDate?: IMinMaxDate | undefined;
    minDate?: IMinMaxDate | undefined;
    startDayOfWeek?: StartDayOfWeek | undefined;
    renderPicker?: () => ReactElement;
    renderTodolist?: () => ReactElement;
    renderClear?: () => ReactElement;
    holidays?: IHolidayDate[];
    showHolidays?: boolean | undefined;
    showWeekends?: boolean | undefined;
    handleDayClick?: (e: SyntheticEvent) => void;
    showDaysWithTask?: boolean | undefined;
    setShownDate?: Dispatch<SetStateAction<IDate>>;
    startDate?: ISelectedDate;
    endDate?: ISelectedDate;
    color?: IColors | undefined;
}
