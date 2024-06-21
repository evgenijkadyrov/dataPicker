import { Dispatch, ReactElement, SetStateAction, SyntheticEvent } from "react";

import { IHolidayDate, StartDayOfWeek } from "@/constants/constants";
import { IDate, IMinMaxDate, ISelectedDate } from "@/interfaces/interfaces";

export interface ICalendarProps {
    shownDate: IDate;
    selectedDate: ISelectedDate;
    maxDate: IMinMaxDate;
    minDate: IMinMaxDate;
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
}
