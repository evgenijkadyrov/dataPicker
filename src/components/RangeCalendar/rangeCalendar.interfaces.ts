import { IColors } from "@/components/Calendar/calendar.interface";
import { StartDayOfWeek } from "@/constants";
import { IMinMaxDate } from "@/interfaces";

export interface IProps {
    startDayOfWeek?: StartDayOfWeek | undefined;
    maxDate?: IMinMaxDate;
    minDate?: IMinMaxDate;
    color?: IColors;
    showHolidays?: boolean | undefined;
    showWeekends?: boolean | undefined;
    showDaysWithTask?: boolean | undefined;
    onChange?: (value: string | undefined) => void;
}
