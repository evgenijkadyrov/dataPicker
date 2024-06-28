import { ChangeEvent } from "react";

import { NextIcon, PrevIcon } from "@/components/Icons";
import { CURRENT_DATE, MONTH_NAMES } from "@/constants";
import { equalDate, generateRangeOfYearForSelect } from "@/helpers";

import { ICalendarHeaderProps } from "./calendarHeader.interface";

import "./styles.scss";

export const CalendarHeader = ({
    showPreviousMonth,
    showNextMonth,
    handleChangeDate,
    currentDate,
    minDate,
    maxDate,
}: ICalendarHeaderProps) => {
    const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleChangeDate(e, "year");
    };
    const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleChangeDate(e, "month");
    };
    return (
        <div className="calendar_header">
            <div className="months">
                <button
                    type="button"
                    className="button"
                    onClick={showPreviousMonth}
                    disabled={equalDate(minDate, currentDate)}>
                    <PrevIcon />
                </button>
                <div className="date-title">
                    <select
                        className="select_month"
                        value={currentDate?.month}
                        onChange={handleMonthChange}>
                        {MONTH_NAMES.map((monthItem, index) => (
                            <option key={monthItem} value={index} className="month_text">
                                {monthItem}
                            </option>
                        ))}
                    </select>
                    <select
                        className="select_month"
                        value={currentDate?.year}
                        onChange={handleYearChange}>
                        {generateRangeOfYearForSelect(
                            CURRENT_DATE.year,
                            maxDate,
                            minDate
                        ).map((yearItem) => (
                            <option
                                key={yearItem}
                                value={yearItem}
                                className="month_text">
                                {yearItem}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="button"
                    className="button"
                    onClick={showNextMonth}
                    disabled={equalDate(maxDate, currentDate)}>
                    <NextIcon />
                </button>
            </div>
        </div>
    );
};
