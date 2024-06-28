import { CURRENT_DATE } from "@/constants";
import { calculateStartDayOfWeek } from "@/helpers";
import { useCalendarCells } from "@/hooks/useCalendarCells";

import { ICalendarBodyProps } from "./calendarBody.interface";

import "./styles.scss";

export const CalendarBody = ({
    currentDate = CURRENT_DATE,
    renderDayButton,
    startDayOfWeek,
}: ICalendarBodyProps) => {
    const calendarCells = useCalendarCells({
        currentDate,
        startDayOfWeek,
        renderDayButton,
    });

    return (
        <div className="calendar_body">
            <div className="days_week_container">
                {calculateStartDayOfWeek(startDayOfWeek).map((weekday) => (
                    <div key={weekday} className="weekday">
                        {weekday}
                    </div>
                ))}
            </div>
            <div className="month_body">{calendarCells}</div>
        </div>
    );
};
