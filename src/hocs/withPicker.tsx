import {
    ComponentType,
    Dispatch,
    KeyboardEvent,
    ReactElement,
    SetStateAction,
    SyntheticEvent,
    useState,
} from "react";

import { Picker } from "@/components";
import { CURRENT_DATE } from "@/constants";
import { formatDateToString, formatStringToDate, isValidDate } from "@/helpers";
import { IDate, ISelectedDate } from "@/interfaces";

import "@/components/Picker/styles.scss";

export function withPickerLogic<T>(
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
        const [dateString, setDateString] = useState<string>(
            formatDateToString(selectedDate)
        );
        const [error, setError] = useState("");

        const handleInputChange = (e: SyntheticEvent): void => {
            const target = e.target as HTMLInputElement;
            const formattedValue = target.value.replace(
                /(\d{4})(\d{2})(\d{2})/,
                "$1-$2-$3"
            );
            setDateString(formattedValue);
        };

        const handleEnterDate = (e: KeyboardEvent<HTMLInputElement>): void => {
            if (e.key !== "Enter") {
                return;
            }
            if (!dateString.trim()) {
                return;
            }

            const date: IDate | undefined = formatStringToDate(dateString);

            if (!isValidDate(date) || !date) {
                setError("Date is not valid. Please enter date in correct format.");
                return;
            }

            setShownDate(date);
            setSelectedDate(date as ISelectedDate);
            setError("");
        };

        const handleClearDate = (): void => {
            setShownDate(CURRENT_DATE);
            setSelectedDate({ year: undefined, month: undefined, day: undefined });
        };

        const handleDayClick = (e: SyntheticEvent): void => {
            const target = e.target as HTMLElement;

            if ("year" in shownDate) {
                setSelectedDate({
                    year: shownDate.year,
                    month: shownDate.month,
                    day: parseInt(target.innerText, 10),
                } as ISelectedDate);
            }
        };

        const renderPicker = (): ReactElement => (
            <>
                <Picker
                    value={dateString}
                    onChange={handleInputChange}
                    onKeyDown={handleEnterDate}
                    onClick={handleClearDate}
                />
                {error && <span className="error">{error}</span>}
            </>
        );

        return (
            <Component
                {...(hocProps as T)}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                handleDayClick={handleDayClick}
                renderPicker={renderPicker}
                setShownDate={setShownDate}
            />
        );
    };
}
