import { ChangeEvent, useState } from "react";
import classNames from "classnames";

import { CalendarBody } from "@/components/CalendarBody";
import { CalendarHeader } from "@/components/CalendarHeader";
import { IDate } from "@/constants/currentDate";
import { compareDate } from "@/helpers/compareDate";

import "./styles.scss";

// interface ICalendarProps {}

export const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<IDate | null>(null);

    const showPreviousMonth = () => {
        setCurrentDate((prevDate) => {
            const prevMonth = prevDate.getMonth() - 1;
            return new Date(prevDate.getFullYear(), prevMonth, 1);
        });
    };

    const showNextMonth = () => {
        setCurrentDate((prevDate) => {
            const nextMonth = prevDate.getMonth() + 1;
            return new Date(prevDate.getFullYear(), nextMonth, 1);
        });
    };

    const handleChangeMonth = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrentDate((prevDate) => {
            const selectMonth = +e.target.value;
            return new Date(prevDate.getFullYear(), selectMonth, 1);
        });
    };
    const handleChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrentDate((prevDate) => {
            const selectYear = +e.target.value;
            return new Date(selectYear, prevDate.getMonth(), 1);
        });
    };

    const renderDayButton = (date: IDate, isCurrentMonth: boolean) => {
        const isSelected = compareDate(date, selectedDate);
        const handleDateClick = () => {
            setSelectedDate((prevState) => (compareDate(prevState, date) ? null : date));
        };
        return (
            <button
                type="button"
                key={`${date.month}-${date.day}`}
                className={classNames("day", "button", {
                    "day-disabled": !isCurrentMonth,
                    selected: isSelected,
                })}
                onClick={handleDateClick}>
                {date.day}
            </button>
        );
    };

    return (
        <div className="calendar">
            <CalendarHeader
                currentDate={currentDate}
                monthI={currentDate.getMonth()}
                showPreviousMonth={showPreviousMonth}
                showNextMonth={showNextMonth}
                handleChangeMonth={handleChangeMonth}
                handleChangeYear={handleChangeYear}
            />
            <CalendarBody currentDate={currentDate} renderDayButton={renderDayButton} />
        </div>
    );
};
