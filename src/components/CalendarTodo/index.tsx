import { memo, useMemo, useState } from "react";

import { Calendar } from "@/components";
import { ICalendarProps } from "@/components/Calendar/calendar.interface";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { StartDayOfWeek } from "@/constants";
import { withAddTodolist, withHolidays } from "@/hocs";
import { IDate, initialShownDate, ISelectedDate } from "@/interfaces";

export const CalendarTodo = memo<ICalendarProps>(
    ({
        startDayOfWeek = StartDayOfWeek.Monday,
        maxDate,
        minDate,
        color,
        showHolidays = true,
        showWeekends = true,
        showDaysWithTask = true,
    }) => {
        const [shownDate, setShownDate] = useState<IDate>(initialShownDate);
        const [selectedDate, setSelectedDate] = useState<ISelectedDate>(initialShownDate);
        const CalendarWithHolidays = useMemo(() => withHolidays(Calendar), [shownDate]);

        const CalendarWithTodo = withAddTodolist(
            CalendarWithHolidays,
            selectedDate,
            setSelectedDate,
            shownDate,
            setShownDate
        );

        return (
            <ErrorBoundary>
                <CalendarWithTodo
                    startDayOfWeek={startDayOfWeek}
                    maxDate={maxDate}
                    minDate={minDate}
                    color={color}
                    showHolidays={showHolidays}
                    showWeekends={showWeekends}
                    showDaysWithTask={showDaysWithTask}
                    shownDate={shownDate}
                />
            </ErrorBoundary>
        );
    }
);
