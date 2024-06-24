import { ReactElement } from "react";

import { StartDayOfWeek } from "@/constants";
import { IDate } from "@/interfaces";

export interface ICalendarBodyProps {
    currentDate: IDate;
    renderDayButton: (date: IDate, isCurrentMonth: boolean) => ReactElement;
    startDayOfWeek: StartDayOfWeek;
}
