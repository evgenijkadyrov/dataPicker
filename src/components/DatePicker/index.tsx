import { memo, useMemo, useState } from "react";

import { Calendar } from "@/components";
import { StartDayOfWeek } from "@/constants/constants";
import { CURRENT_DATE } from "@/constants/currentDate";
import { withHolidays } from "@/hocs/withHolidays";
import { withPickerLogic } from "@/hocs/withPicker";
import { IDate, ISelectedDate } from "@/interfaces/interfaces";

import { IProps } from "./datePicker.interfaces";

const initialSelectedDate: ISelectedDate = {
    month: undefined,
    year: undefined,
    day: undefined,
};

const initialShownDate: IDate = {
    ...CURRENT_DATE,
};

export const DatePicker = memo<IProps>(
    ({
        startDayOfWeek = StartDayOfWeek.Monday,
        maxDate,
        minDate,
        color,
        showHolidays = true,
        showWeekends = true,
    }) => {
        const [shownDate, setShownDate] = useState<IDate>(initialShownDate);
        const [selectedDate, setSelectedDate] =
            useState<ISelectedDate>(initialSelectedDate);
        const CalendarWithHolidays = useMemo(() => withHolidays(Calendar), [shownDate]);

        const CalendarWithPicker = withPickerLogic(
            CalendarWithHolidays,
            selectedDate,
            setSelectedDate,
            shownDate,
            setShownDate,
            showWeekends
        );

        return (
            <CalendarWithPicker
                startDayOfWeek={startDayOfWeek}
                maxDate={maxDate}
                minDate={minDate}
                color={color}
                showHolidays={showHolidays}
                showWeekends={showWeekends}
                shownDate={shownDate}
            />
        );
    }
);
