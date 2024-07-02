import { CalendarBody, CalendarHeader } from "@/components";
import {
    CURRENT_DATE,
    DEFAULT_MAX_DATE,
    DEFAULT_MIN_DATE,
    StartDayOfWeek,
} from "@/constants";
import { generateComponentClasses } from "@/helpers";
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
        const componentClasses = generateComponentClasses({
            date,
            isCurrentMonth,
            color,
            selectedDate,
            showHolidays,
            holidays,
            showWeekends,
            showDaysWithTask,
            startDate,
            endDate,
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
