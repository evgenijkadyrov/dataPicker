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
import { CURRENT_DATE } from "@/constants/currentDate";
import { formatDateToString } from "@/helpers/formattedDateToString";
import { formatStringToDate } from "@/helpers/formattedStringToDate";
import { isValidDate } from "@/helpers/isValidDate";
import { IDate, ISelectedDate } from "@/interfaces/interfaces";

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

        const handleInputChange = (e: SyntheticEvent): void => {
            const target = e.target as HTMLInputElement;

            setDateString(target.value);
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
                return;
            }

            setShownDate(date);
            setSelectedDate(date as ISelectedDate);
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
            <Picker
                value={dateString}
                onChange={handleInputChange}
                onKeyDown={handleEnterDate}
                onClick={handleClearDate}
            />
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
