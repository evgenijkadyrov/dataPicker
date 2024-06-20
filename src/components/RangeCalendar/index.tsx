import { memo, useMemo, useState } from "react";
import { IProps } from "src/components/RangeCalendar/rangeCalendar.interfaces";

import { Calendar } from "@/components";
import { StartDayOfWeek } from "@/constants/constants";
import { CURRENT_DATE } from "@/constants/currentDate";
import { withHolidays } from "@/hocs/withHolidays";
import { withRangeLogic } from "@/hocs/withRange";
import { IDate, ISelectedDate } from "@/interfaces/interfaces";

const initialSelectedDate: ISelectedDate = {
    month: undefined,
    year: undefined,
    day: undefined,
};

const initialShownDate: IDate = {
    ...CURRENT_DATE,
};

export const RangeCalendar = memo<IProps>(
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
        const CalendarWithMainLogic = useMemo(() => withHolidays(Calendar), [shownDate]);

        const CalendarWithRange = withRangeLogic(
            CalendarWithMainLogic,
            selectedDate,
            setSelectedDate,
            shownDate,
            setShownDate,
            showWeekends
        );

        return (
            <CalendarWithRange
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
