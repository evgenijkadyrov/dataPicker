import { ChangeEvent } from "react";

import { Field, IDate, IMinMaxDate } from "@/interfaces";

export interface ICalendarHeaderProps {
    currentDate: IDate | undefined;
    showPreviousMonth: () => void;
    showNextMonth: () => void;
    handleChangeDate: (event: ChangeEvent<HTMLSelectElement>, field: Field) => void;
    minDate: IMinMaxDate | undefined;
    maxDate: IMinMaxDate | undefined;
}
