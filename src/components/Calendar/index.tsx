import React, { useState } from "react";
import classNames from "classnames";

import { NextIcon } from "@/components/Icons/NextIcon";
import { PrevIcon } from "@/components/Icons/PrevIcon";
import { MONTH_NAMES, SHORT_DAY_NAMES } from "@/constants/constants";
import { useCalendar } from "@/hooks/useCalendar";

import "@/components/Calendar/styles.css";

export interface ICalendarProps {
    onSelectDate: (date: Date) => void;
}

export interface ISelectedDate {
    day: number;
    month: number;
    year: number;
}

export const Calendar = ({ onSelectDate }: ICalendarProps) => {
    const {
        currentDate,

        showPreviousMonth,
        showNextMonth,
    } = useCalendar({ onSelectDate });

    const [selectedDate, setSelectedDate] = useState<ISelectedDate | null>(null);
    const renderCalendar = () => {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();

        const handleDateClick = (
            selectDay: number,
            selectMonth: number,
            selectYear: number
        ) => {
            setSelectedDate((prevState) => {
                if (
                    prevState?.day === selectDay &&
                    prevState?.month === selectMonth &&
                    prevState?.year === selectYear
                ) {
                    return null;
                }
                return { day: selectDay, month: selectMonth, year: selectYear };
            });
        };

        const weekdaysMarkup = SHORT_DAY_NAMES.map((weekday) => (
            <div key={weekday} className="weekday">
                {weekday}
            </div>
        ));

        const calendarCells = [];
        let row = [];

        // Days of the previous month
        const prevMonth = month === 0 ? 11 : month - 1;
        const prevYear = month === 0 ? year - 1 : year;
        const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
        for (let i = firstDay - 1; i >= 0; i -= 1) {
            const day = daysInPrevMonth - i;
            const isSelected =
                day === selectedDate?.day && prevMonth === selectedDate.month;
            row.push(
                <button
                    type="button"
                    key={`prev-${day}`}
                    className={classNames("day", "button", "prev-month", {
                        selected: isSelected,
                    })}
                    onClick={() => handleDateClick(day, prevMonth, prevYear)}>
                    {day}
                </button>
            );
        }

        // Days of the current month
        for (let day = 1; day <= daysInMonth; day += 1) {
            const isSelected = day === selectedDate?.day && month === selectedDate.month;
            row.push(
                <button
                    type="button"
                    key={day}
                    className={classNames("day", "button", { selected: isSelected })}
                    onClick={() => handleDateClick(day, month, year)}>
                    {day}
                </button>
            );
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
        const nextMonth = month === 11 ? 0 : month + 1;
        const nextYear = month === 11 ? year + 1 : year;
        const remainingCells = 7 - row.length;

        for (let day = 1; day <= remainingCells; day += 1) {
            const isSelected =
                day === selectedDate?.day && nextMonth === selectedDate.month;
            row.push(
                <button
                    type="button"
                    key={`next-${day}`}
                    className={classNames("day", "button", "next-month", {
                        selected: isSelected,
                    })}
                    onClick={() => handleDateClick(day, nextMonth, nextYear)}>
                    {day}
                </button>
            );
        }

        // Add the last row of the current month
        calendarCells.push(
            <div key="row-last" className="row">
                {row}
            </div>
        );

        return (
            <div className="calendar_wrapper">
                <div className="calendar_header">
                    <div className="months">
                        <button
                            type="button"
                            className="button"
                            onClick={showPreviousMonth}>
                            <PrevIcon />
                        </button>
                        <select className="select_month">
                            {MONTH_NAMES.map((el) => (
                                <option key={el} className="month_text">
                                    {el}
                                </option>
                            ))}
                        </select>
                        <button type="button" className="button" onClick={showNextMonth}>
                            <NextIcon />
                        </button>
                    </div>
                </div>
                <div className="days_week_container">{weekdaysMarkup}</div>
                <div className="month_body">{calendarCells}</div>
            </div>
        );
    };

    return <div className="calendar">{renderCalendar()}</div>;
};
