import { IColors } from "@/components/Calendar/calendar.interface";
import { StartDayOfWeek } from "@/constants";
import { IMinMaxDate } from "@/interfaces";

export interface IProps {
    startDayOfWeek?: StartDayOfWeek | undefined;
    maxDate: IMinMaxDate;
    minDate: IMinMaxDate;
    color: IColors;
    showHolidays?: boolean;
    showWeekends?: boolean;
    showDaysWithTask?: boolean;
    onChange?: (value: string) => void;
}
