import { ReactElement, useEffect, useState } from "react";

import { ICalendarBodyProps } from "@/components/CalendarBody/calendarBody.interface";
import { WEEK_LENGTH } from "@/constants";
import {
    calculateFirstDay,
    getDaysInMonth,
    getNextMonthAndYear,
    getPreviousMonthAndYear,
} from "@/helpers";
import { IDate } from "@/interfaces";

export const useCalendarCells = ({
    currentDate,
    startDayOfWeek,
    renderDayButton,
}: ICalendarBodyProps) => {
    const [calendarCells, setCalendarCells] = useState([]);

    useEffect(() => {
        const { year, month }: IDate = currentDate;
        const daysInMonth: number = getDaysInMonth(year, month);
        const firstDay = calculateFirstDay(startDayOfWeek, year, month);

        const cells = [];
        let row: ReactElement[] = [];

        const { prevMonth, prevYear } = getPreviousMonthAndYear(month, year);
        const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

        for (let i = firstDay - 1; i >= 0; i -= 1) {
            const day = daysInPrevMonth - i;
            const prevDate = { day, month: prevMonth, year: prevYear };
            row.push(renderDayButton(prevDate, false));
        }

        for (let day = 1; day <= daysInMonth; day += 1) {
            const currentMonthDate = { day, month, year };
            row.push(renderDayButton(currentMonthDate, true));

            if (row.length === WEEK_LENGTH) {
                cells.push(
                    <div key={`row-${day}`} className="row">
                        {row}
                    </div>
                );
                row = [];
            }
        }

        const { nextMonth, nextYear } = getNextMonthAndYear(month, year);
        const remainingCells = WEEK_LENGTH - row.length;

        for (let day = 1; day <= remainingCells; day += 1) {
            const nextDate = { day, month: nextMonth, year: nextYear };
            row.push(renderDayButton(nextDate, false));
        }

        cells.push(
            <div key="row-last" className="row">
                {row}
            </div>
        );

        setCalendarCells(cells);
    }, [currentDate, startDayOfWeek, renderDayButton]);

    return calendarCells;
};
