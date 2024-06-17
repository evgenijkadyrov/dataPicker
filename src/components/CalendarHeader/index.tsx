import { ChangeEvent, FC } from "react";

import { NextIcon } from "@/components/Icons/NextIcon";
import { PrevIcon } from "@/components/Icons/PrevIcon";
import { MONTH_NAMES } from "@/constants/constants";
import { CURRENT_DATE } from "@/constants/currentDate";
import { equalDate } from "@/helpers/equalDate";
import { formattedDate } from "@/helpers/formattedDate";
import { getYearNumbers } from "@/helpers/getYearNumber";

import "./styles.scss";

export interface IMinMaxDate {
    month: number;
    year: number;
}

interface ICalendarHeaderProps {
    currentDate: Date;
    monthI: number;
    showPreviousMonth: () => void;
    showNextMonth: () => void;
    handleChangeYear: (event: ChangeEvent<HTMLSelectElement>) => void;
    handleChangeMonth: (event: ChangeEvent<HTMLSelectElement>) => void;
    minDate: IMinMaxDate | null;
    maxDate: IMinMaxDate | null;
}

export const CalendarHeader: FC<ICalendarHeaderProps> = ({
    monthI,
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
                disabled={equalDate(minDate, formattedDate(currentDate))}>
                <PrevIcon />
            </button>
            <div className="date-title">
                <select
                    className="select_month"
                    value={monthI}
                    onChange={handleChangeMonth}>
                    {MONTH_NAMES.map((monthItem, index) => (
                        <option key={monthItem} value={index} className="month_text">
                            {monthItem}
                        </option>
                    ))}
                </select>
                <select
                    className="select_month"
                    value={currentDate.getFullYear()}
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
                disabled={equalDate(maxDate, formattedDate(currentDate))}>
                <NextIcon />
            </button>
        </div>
    </div>
);
