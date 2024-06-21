import { CURRENT_DATE } from "@/constants";
import { StartDayOfWeek } from "@/constants/constants";
import { IDate, IMinMaxDate, ISelectedDate } from "@/interfaces";

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

export const initialSelectedDate: ISelectedDate = {
    month: undefined,
    year: undefined,
    day: undefined,
};
export const initialShownDate: IDate = {
    ...CURRENT_DATE,
};
