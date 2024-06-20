import { memo, useMemo, useState } from "react";

import { Calendar, ICalendarProps } from "@/components";
import { StartDayOfWeek } from "@/constants/constants";
import { CURRENT_DATE } from "@/constants/currentDate";
import { withAddTodolist } from "@/hocs/withAddTodo";
import { withHolidays } from "@/hocs/withHolidays";
import { IDate, ISelectedDate } from "@/interfaces/interfaces";

const initialShownDate: IDate = {
    ...CURRENT_DATE,
};

export const CalendarTodo = memo<ICalendarProps>(
    ({
        startDayOfWeek = StartDayOfWeek.Monday,
        maxDate,
        minDate,
        showHolidays = true,
        showWeekends = true,
        showDaysWithTask = true,
    }) => {
        const [shownDate, setShownDate] = useState<IDate>(initialShownDate);
        const [selectedDate, setSelectedDate] = useState<ISelectedDate>(initialShownDate);
        const CalendarWithMainLogic = useMemo(() => withHolidays(Calendar), [shownDate]);

        const CalendarWithTodo = withAddTodolist(
            CalendarWithMainLogic,
            selectedDate,
            setSelectedDate,
            shownDate,
            setShownDate,
            showWeekends,
            showDaysWithTask
        );

        return (
            <CalendarWithTodo
                startDayOfWeek={startDayOfWeek}
                maxDate={maxDate}
                minDate={minDate}
                showHolidays={showHolidays}
                showWeekends={showWeekends}
                showDaysWithTask={showDaysWithTask}
                shownDate={shownDate}
            />
        );
    }
);
