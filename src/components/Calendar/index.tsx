import {
    ChangeEvent,
    Dispatch,
    ReactElement,
    SetStateAction,
    SyntheticEvent,
} from "react";
import classNames from "classnames";

import { CalendarBody } from "@/components/CalendarBody";
import { CalendarHeader, IMinMaxDate } from "@/components/CalendarHeader";
import {
    defaultMaxDate,
    defaultMinDate,
    IHolidayDate,
    StartDayOfWeek,
} from "@/constants/constants";
import { CURRENT_DATE } from "@/constants/currentDate";
import { calculateIsDayHoliday } from "@/helpers/calculateHolidaysDay";
import { isDateInRange } from "@/helpers/calculateRangeDay";
import { calculateWeekendDay } from "@/helpers/calculateWeekendDay";
import { compareDate } from "@/helpers/compareDate";
import { calculateDayHaveTodo } from "@/helpers/isDayHaveTodo";
import { IDate, ISelectedDate } from "@/interfaces/interfaces";

import "./styles.scss";

export interface ICalendarProps {
    startDayOfWeek?: StartDayOfWeek | undefined;
    renderPicker?: () => ReactElement;
    renderTodolist?: () => ReactElement;
    holidays?: IHolidayDate[];
    showHolidays?: boolean | undefined;
    showWeekends?: boolean | undefined;
    selectedDate: ISelectedDate;
    maxDate: IMinMaxDate;
    minDate: IMinMaxDate;
    handleDayClick?: (e: SyntheticEvent) => void;
    showDaysWithTask?: boolean | undefined;
    setShownDate?: Dispatch<SetStateAction<IDate>>;
    shownDate: IDate;
    startDate?: IDate;
    endDate?: IDate;
}

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
    minDate = defaultMinDate,
    maxDate = defaultMaxDate,
    startDate,
    endDate,
}: ICalendarProps) => {
    const showPreviousMonth = () => {
        if (setShownDate) {
            setShownDate((prevDate: IDate) => {
                const prevMonth = prevDate.month - 1;
                return { year: prevDate.year, month: prevMonth, day: 1 };
            });
        }
    };
    const showNextMonth = () => {
        if (setShownDate) {
            setShownDate((prevDate: IDate) => {
                const prevMonth = prevDate.month + 1;
                return { year: prevDate.year, month: prevMonth, day: 1 };
            });
        }
    };

    const handleChangeMonth = (e: ChangeEvent<HTMLSelectElement>) => {
        if (setShownDate) {
            setShownDate((prevDate: IDate) => {
                const selectMonth = +e.target.value;
                return { year: prevDate.year, month: selectMonth, day: 1 };
            });
        }
    };

    const handleChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
        if (setShownDate) {
            setShownDate((prevDate: IDate) => {
                const selectYear = +e.target.value;
                return { year: selectYear, month: prevDate.month, day: 1 };
            });
        }
    };

    const renderDayButton = (date: IDate, isCurrentMonth: boolean) => {
        const isWeekendDay = showWeekends && calculateWeekendDay(date);
        const isSelected = compareDate(date, selectedDate);
        const isHoliday = showHolidays && calculateIsDayHoliday(date, holidays);
        const isHaveTodo = showDaysWithTask && calculateDayHaveTodo(date);
        const isStartDate = compareDate(date, startDate);
        const isEndDate = compareDate(date, endDate);
        const isRange = isDateInRange(date, startDate, endDate);
        return (
            <button
                type="button"
                key={`${date.month}-${date.day}`}
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
                {date.day}
            </button>
        );
    };

    return (
        <div className="calendar">
            {renderPicker && renderPicker()}
            <CalendarHeader
                currentDate={shownDate}
                // monthI={shownDate.month}
                showPreviousMonth={showPreviousMonth}
                showNextMonth={showNextMonth}
                handleChangeMonth={handleChangeMonth}
                handleChangeYear={handleChangeYear}
                minDate={minDate}
                maxDate={maxDate}
            />
            <CalendarBody
                currentDate={shownDate}
                renderDayButton={renderDayButton}
                startDayOfWeek={startDayOfWeek}
            />
            {renderTodolist && renderTodolist()}
        </div>
    );
};
