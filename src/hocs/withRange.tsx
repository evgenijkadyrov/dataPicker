import { ComponentType, Dispatch, SetStateAction, SyntheticEvent, useState } from "react";

import { IDate, ISelectedDate } from "@/interfaces/interfaces";

export function withRangeLogic<T>(
    Component: ComponentType<T>,
    selectedDate: ISelectedDate,
    setSelectedDate: Dispatch<SetStateAction<ISelectedDate>>,
    shownDate: IDate,
    setShownDate: Dispatch<SetStateAction<IDate>>,
    showWeekends?: boolean | undefined
) {
    return (
        hocProps: Omit<
            T,
            "selectedDate" | "setSelectedDate" | "setShownDate" | "handleDayClick"
        >
    ) => {
        const [startDate, setStartDate] = useState<ISelectedDate>();
        const [endDate, setEndDate] = useState<ISelectedDate>();

        const handleDayClick = (e: SyntheticEvent): void => {
            const target = e.target as HTMLElement;
            if (!startDate) {
                setStartDate({
                    year: shownDate.year,
                    month: shownDate.month,
                    day: parseInt(target.innerText, 10),
                });
            } else if (!endDate) {
                setEndDate({
                    year: shownDate.year,
                    month: shownDate.month,
                    day: parseInt(target.innerText, 10),
                });
            }
            if (endDate) {
                setStartDate(undefined);
                setEndDate(undefined);
            }
        };

        return (
            <Component
                {...(hocProps as T)}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                handleDayClick={handleDayClick}
                startDate={startDate}
                endDate={endDate}
                shownDate={shownDate}
                setShownDate={setShownDate}
                showWeekends={showWeekends}
            />
        );
    };
}
