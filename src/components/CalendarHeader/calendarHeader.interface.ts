import { ChangeEvent } from "react";

import { Field, IDate, IMinMaxDate } from "@/interfaces";

export interface ICalendarHeaderProps {
    currentDate: IDate;
    showPreviousMonth: () => void;
    showNextMonth: () => void;
    handleChangeDate: (event: ChangeEvent<HTMLSelectElement>, field: Field) => void;
    minDate: IMinMaxDate;
    maxDate: IMinMaxDate;
}
