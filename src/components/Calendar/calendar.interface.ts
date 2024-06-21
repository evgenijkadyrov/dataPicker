import { Dispatch, ReactElement, SetStateAction, SyntheticEvent } from "react";

import { IHolidayDate, StartDayOfWeek } from "@/constants/constants";
import { IDate, IMinMaxDate, ISelectedDate } from "@/interfaces/interfaces";

export interface ICalendarProps {
    startDayOfWeek?: StartDayOfWeek | undefined;
    renderPicker?: () => ReactElement;
    renderTodolist?: () => ReactElement;
    holidays?: IHolidayDate[];
    showHolidays?: boolean | undefined;
    showWeekends?: boolean | undefined;
    selectedDate: ISelectedDate;
    maxDate: IMinMaxDate;
    minDate: IMinMaxDate;
    handleDayClick?: (e: SyntheticEvent) => void;
    showDaysWithTask?: boolean | undefined;
    setShownDate?: Dispatch<SetStateAction<IDate>>;
    shownDate: IDate;
    startDate?: ISelectedDate;
    endDate?: ISelectedDate;
}
