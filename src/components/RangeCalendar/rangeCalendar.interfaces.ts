import { StartDayOfWeek } from "@/constants";
import { IMinMaxDate } from "@/interfaces";

export interface IProps {
    startDayOfWeek?: StartDayOfWeek | undefined;
    maxDate: IMinMaxDate;
    minDate: IMinMaxDate;
    color?: string;
    showHolidays?: boolean | undefined;
    showWeekends?: boolean | undefined;
    showDaysWithTask?: boolean | undefined;
    onChange?: (value: string | undefined) => void;
}
