import { ChangeEvent } from "react";

import { FIRST_DAY_IN_MONTH, FIRST_MONTH_IN_YEAR, LAST_MONTH_IN_YEAR } from "@/constants";
import { IDate } from "@/interfaces";

export const useControlMonth = (
    setShownDate: ((value: ((prevState: IDate) => IDate) | IDate) => void) | undefined
) => {
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
    return { showPreviousMonth, showNextMonth, handleChangeDate };
};
