import { memo, useMemo, useState } from "react";

import { Calendar } from "@/components";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { initialSelectedDate, initialShownDate, StartDayOfWeek } from "@/constants";
import { withHolidays, withRangeLogic } from "@/hocs";
import { IDate, ISelectedDate } from "@/interfaces";

import { IProps } from "./rangeCalendar.interfaces";

import "./styles.scss";

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
        const CalendarWithHolidays = useMemo(() => withHolidays(Calendar), [shownDate]);
        const CalendarWithRange = withRangeLogic(
            CalendarWithHolidays,
            selectedDate,
            setSelectedDate,
            shownDate,
            setShownDate
        );

        return (
            <ErrorBoundary>
                <CalendarWithRange
                    startDayOfWeek={startDayOfWeek}
                    maxDate={maxDate}
                    minDate={minDate}
                    color={color}
                    showHolidays={showHolidays}
                    showWeekends={showWeekends}
                    shownDate={shownDate}
                />
            </ErrorBoundary>
        );
    }
);
