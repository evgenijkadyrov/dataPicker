import { StartDayOfWeek } from "@/constants";
import { IMinMaxDate } from "@/interfaces";

export interface IProps {
    startDayOfWeek?: StartDayOfWeek | undefined;
    maxDate: IMinMaxDate;
    minDate: IMinMaxDate;
    color?: string;
    showHolidays?: boolean;
    showWeekends?: boolean;
    showDaysWithTask?: boolean;
    onChange?: (value: string) => void;
}
