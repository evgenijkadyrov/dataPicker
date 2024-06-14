import { FC } from "react";

import { SHORT_DAY_NAMES } from "@/constants/constants";
import { IDate } from "@/constants/currentDate";

import "./styles.css";

interface CalendarBodyProps {
    currentDate: Date;
    renderDayButton: (date: IDate, isCurrentMonth: boolean) => Element;
}

export const CalendarBody: FC = ({ currentDate, renderDayButton }: CalendarBodyProps) => {
    const monthI: number = currentDate.getMonth();
    const year: number = currentDate.getFullYear();
    const daysInMonth: number = new Date(year, monthI + 1, 0).getDate();
    const firstDay: number = new Date(year, monthI, 1).getDay();

    const weekdaysMarkup = SHORT_DAY_NAMES.map((weekday) => (
        <div key={weekday} className="weekday">
            {weekday}
        </div>
    ));

    const calendarCells = [];
    let row = [];

    // Days of the previous month
    const prevMonth: number = monthI === 0 ? 11 : monthI - 1;
    const prevYear: number = monthI === 0 ? year - 1 : year;
    const daysInPrevMonth: number = new Date(prevYear, prevMonth, 0).getDate();

    for (let i = firstDay - 1; i >= 0; i -= 1) {
        const day = daysInPrevMonth - i;
        const prevDate = { day, month: prevMonth, year: prevYear };
        row.push(renderDayButton(prevDate, false));
    }

    // Days of the current month
    for (let day = 1; day <= daysInMonth; day += 1) {
        const currentMonthDate: IDate = { day, month: monthI, year };
        row.push(renderDayButton(currentMonthDate, true));

        if (row.length === 7) {
            calendarCells.push(
                <div key={`row-${day}`} className="row">
                    {row}
                </div>
            );
            row = [];
        }
    }

    // Days of the next month
    const nextMonth: number = monthI === 11 ? 0 : monthI + 1;
    const nextYear: number = monthI === 11 ? year + 1 : year;
    const remainingCells: number = 7 - row.length;

    for (let day = 1; day <= remainingCells; day += 1) {
        const nextDate = { day, month: nextMonth, year: nextYear };
        row.push(renderDayButton(nextDate, false));
    }

    // Add the last row of the current month
    calendarCells.push(
        <div key="row-last" className="row">
            {row}
        </div>
    );

    return (
        <div className="calendar_body">
            <div className="days_week_container">{weekdaysMarkup}</div>
            <div className="month_body">{calendarCells}</div>
        </div>
    );
};
