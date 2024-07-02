import {
    ComponentType,
    Dispatch,
    ReactElement,
    SetStateAction,
    SyntheticEvent,
    useState,
} from "react";

import { IDate, ISelectedDate } from "@/interfaces";

import "./styles.scss";

export function withRangeLogic<T>(
    Component: ComponentType<T>,
    selectedDate: ISelectedDate,
    setSelectedDate: Dispatch<SetStateAction<ISelectedDate>>,
    shownDate: IDate,
    setShownDate: Dispatch<SetStateAction<IDate>>
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
            const selectDate = {
                year: shownDate.year,
                month: shownDate.month,
                day: parseInt(target.innerText, 10),
            };
            if (!startDate) {
                setStartDate(selectDate);
            } else if (!endDate && selectDate.day > startDate.day) {
                setEndDate(selectDate);
            }
            if (endDate) {
                setStartDate(undefined);
                setEndDate(undefined);
            }
        };
        const handleClearDate = (): void => {
            setStartDate(undefined);
            setEndDate(undefined);
        };
        const renderClear = (): ReactElement => (
            <div>
                {startDate && (
                    <button
                        className="clearButton"
                        type="button"
                        onClick={handleClearDate}>
                        Clear
                    </button>
                )}
            </div>
        );
        return (
            <Component
                {...(hocProps as T)}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                handleDayClick={handleDayClick}
                renderClear={renderClear()}
                startDate={startDate}
                endDate={endDate}
                setShownDate={setShownDate}
            />
        );
    };
}
