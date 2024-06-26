import classNames from "classnames";

import { CalendarBody, CalendarHeader } from "@/components";
import {
    CURRENT_DATE,
    DEFAULT_MAX_DATE,
    DEFAULT_MIN_DATE,
    StartDayOfWeek,
} from "@/constants";
import {
    compareDate,
    isDateInRange,
    isDayHaveTodo,
    isDayHoliday,
    isDayWeekendDay,
} from "@/helpers";
import { useControlMonth } from "@/hooks/useControlMonth";
import { IDate } from "@/interfaces";

import { ICalendarProps } from "./calendar.interface";

import "./styles.scss";

export const Calendar = ({
    startDayOfWeek = StartDayOfWeek.Monday,
    renderPicker,
    holidays,
    showHolidays,
    showWeekends,
    renderTodolist,
    handleDayClick,
    selectedDate,
    showDaysWithTask,
    shownDate = CURRENT_DATE,
    setShownDate,
    minDate = DEFAULT_MIN_DATE,
    maxDate = DEFAULT_MAX_DATE,
    startDate,
    endDate,
    renderClear,
    color = "default",
}: ICalendarProps) => {
    const { showPreviousMonth, showNextMonth, handleChangeDate } =
        useControlMonth(setShownDate);

    const renderDayButton = (date: IDate, isCurrentMonth: boolean) => {
        const componentClasses = classNames("day", "button", {
            "day-disabled": !isCurrentMonth,
            "day-selected": compareDate(date, selectedDate),
            "day-holiday": showHolidays && isDayHoliday(date, holidays),
            "day-weekend": showWeekends && isDayWeekendDay(date),
            "day-withTask": showDaysWithTask && isDayHaveTodo(date),
            "day-start": compareDate(date, startDate),
            "day-end": compareDate(date, endDate),
            "day-range": isDateInRange(date, startDate, endDate),
            "day-primary": color === "primary",
            "day-success": color === "success",
            "day-default": color === "default",
        });
        const { month, day } = date;
        return (
            <button
                type="button"
                key={`${month}-${day}`}
                className={componentClasses}
                onClick={handleDayClick}>
                {day}
            </button>
        );
    };

    return (
        <div className="calendar">
            {renderPicker && renderPicker()}
            <CalendarHeader
                currentDate={shownDate}
                showPreviousMonth={showPreviousMonth}
                showNextMonth={showNextMonth}
                handleChangeDate={handleChangeDate}
                minDate={minDate}
                maxDate={maxDate}
            />
            <CalendarBody
                currentDate={shownDate}
                renderDayButton={renderDayButton}
                startDayOfWeek={startDayOfWeek}
            />
            {renderClear && renderClear}
            {renderTodolist && renderTodolist()}
        </div>
    );
};
