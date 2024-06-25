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
}: ICalendarHeaderProps) => (
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
                    value={currentDate.month}
                    onChange={(e) => handleChangeDate(e, "month")}>
                    {MONTH_NAMES.map((monthItem, index) => (
                        <option key={monthItem} value={index} className="month_text">
                            {monthItem}
                        </option>
                    ))}
                </select>
                <select
                    className="select_month"
                    value={currentDate.year}
                    onChange={(e) => handleChangeDate(e, "year")}>
                    {generateRangeOfYearForSelect(
                        CURRENT_DATE.year,
                        maxDate,
                        minDate
                    ).map((yearItem) => (
                        <option key={yearItem} value={yearItem} className="month_text">
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
