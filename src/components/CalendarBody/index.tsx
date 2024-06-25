import { FC } from "react";

import { ICalendarBodyProps } from "@/components";
import { CURRENT_DATE } from "@/constants/currentDate";
import { calculateFirstDay, calculateStartDayOfWeek } from "@/helpers";
import {
    getNextMonthAndYear,
    getPreviousMonthAndYear,
} from "@/helpers/calculate/calculateNextPreviosPeriod";
import { IDate } from "@/interfaces";

import "./styles.scss";

export const CalendarBody: FC = ({
    currentDate = CURRENT_DATE,
    renderDayButton,
    startDayOfWeek,
}: ICalendarBodyProps) => {
    const { year, month } = currentDate;
    const daysInMonth: number = new Date(year, month + 1, 0).getDate();
    const firstDay: number = calculateFirstDay(startDayOfWeek, year, month);

    const weekdaysMarkup = calculateStartDayOfWeek(startDayOfWeek).map((weekday) => (
        <div key={weekday} className="weekday">
            {weekday}
        </div>
    ));

    const calendarCells = [];
    let row = [];

    const { prevMonth, prevYear } = getPreviousMonthAndYear(month, year);
    const daysInPrevMonth: number = new Date(prevYear, prevMonth + 1, 0).getDate();

    for (let i = firstDay - 1; i >= 0; i -= 1) {
        const day = daysInPrevMonth - i;
        const prevDate = { day, month: prevMonth, year: prevYear };
        row.push(renderDayButton(prevDate, false));
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
        const currentMonthDate: IDate = { day, month, year };
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

    const { nextMonth, nextYear } = getNextMonthAndYear(month, year);
    const remainingCells: number = 7 - row.length;

    for (let day = 1; day <= remainingCells; day += 1) {
        const nextDate = { day, month: nextMonth, year: nextYear };
        row.push(renderDayButton(nextDate, false));
    }

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
