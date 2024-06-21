import { ChangeEvent } from "react";
import classNames from "classnames";

import { CalendarBody, CalendarHeader, ICalendarProps } from "@/components";
import {
    CURRENT_DATE,
    DEFAULT_MAX_DATE,
    DEFAULT_MIN_DATE,
    FIRST_DAY_IN_MONTH,
    FIRST_MONTH_IN_YEAR,
    LAST_MONTH_IN_YEAR,
    StartDayOfWeek,
} from "@/constants";
import {
    compareDate,
    isDateInRange,
    isDayHaveTodo,
    isDayHoliday,
    isDayWeekendDay,
} from "@/helpers";
import { IDate } from "@/interfaces";

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
}: ICalendarProps) => {
    const showPreviousMonth = () => {
        if (setShownDate) {
            setShownDate(({ month, year }: IDate) => ({
                year: month === FIRST_MONTH_IN_YEAR ? year - 1 : year,
                month: month === FIRST_MONTH_IN_YEAR ? LAST_MONTH_IN_YEAR : month - 1,
                day: FIRST_DAY_IN_MONTH,
            }));
        }
    };
    const showNextMonth = () => {
        if (setShownDate) {
            setShownDate(({ month, year }: IDate) => ({
                year: month === LAST_MONTH_IN_YEAR ? year + 1 : year,
                month: month === LAST_MONTH_IN_YEAR ? FIRST_MONTH_IN_YEAR : month + 1,
                day: FIRST_DAY_IN_MONTH,
            }));
        }
    };

    const handleChangeDate = (
        e: ChangeEvent<HTMLSelectElement>,
        field: "month" | "year"
    ) => {
        if (setShownDate) {
            setShownDate(({ year, month }: IDate) => ({
                year: field === "year" ? Number(e.target.value) : year,
                month: field === "month" ? Number(e.target.value) : month,
                day: FIRST_DAY_IN_MONTH,
            }));
        }
    };

    const renderDayButton = (date: IDate, isCurrentMonth: boolean) => {
        const isWeekendDay = showWeekends && isDayWeekendDay(date);
        const isSelected = compareDate(date, selectedDate);
        const isHoliday = showHolidays && isDayHoliday(date, holidays);
        const isHaveTodo = showDaysWithTask && isDayHaveTodo(date);
        const isStartDate = compareDate(date, startDate);
        const isEndDate = compareDate(date, endDate);
        const isRange = isDateInRange(date, startDate, endDate);

        const { month, day } = date;
        return (
            <button
                type="button"
                key={`${month}-${day}`}
                className={classNames("day", "button", {
                    "day-disabled": !isCurrentMonth,
                    selected: isSelected,
                    isHoliday,
                    isWeekendDay,
                    isHaveTodo,
                    isStartDate,
                    isEndDate,
                    isRange,
                })}
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
