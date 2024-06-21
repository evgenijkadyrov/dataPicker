import { ChangeEvent, FC } from "react";

import { NextIcon } from "@/components/Icons/NextIcon";
import { PrevIcon } from "@/components/Icons/PrevIcon";
import { MONTH_NAMES } from "@/constants/constants";
import { CURRENT_DATE } from "@/constants/currentDate";
import { equalDate } from "@/helpers/equalDate";
import { getYearNumbers } from "@/helpers/getYearNumber";
import { IDate } from "@/interfaces/interfaces";

import "./styles.scss";

export interface IMinMaxDate {
    month: number;
    year: number;
}

interface ICalendarHeaderProps {
    currentDate: IDate;

    showPreviousMonth: () => void;
    showNextMonth: () => void;
    handleChangeYear: (event: ChangeEvent<HTMLSelectElement>) => void;
    handleChangeMonth: (event: ChangeEvent<HTMLSelectElement>) => void;
    minDate: IMinMaxDate;
    maxDate: IMinMaxDate;
}

export const CalendarHeader: FC<ICalendarHeaderProps> = ({
    showPreviousMonth,
    showNextMonth,
    handleChangeMonth,
    handleChangeYear,
    currentDate,
    minDate,
    maxDate,
}) => (
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
                    onChange={handleChangeMonth}>
                    {MONTH_NAMES.map((monthItem, index) => (
                        <option key={monthItem} value={index} className="month_text">
                            {monthItem}
                        </option>
                    ))}
                </select>
                <select
                    className="select_month"
                    value={currentDate.year}
                    onChange={handleChangeYear}>
                    {getYearNumbers(CURRENT_DATE.year).map((yearItem) => (
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
