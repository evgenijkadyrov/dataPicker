import { KeyboardEvent, memo, SyntheticEvent } from "react";

import { CalendarIcon } from "@/components/Icons/Calendar";
import { ClearIcon } from "@/components/Icons/ClearIcon";

import "./styles.scss";

export interface IProps {
    value: string;
    onChange: (e: SyntheticEvent) => void;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

export const Picker = memo(({ value, onChange, onKeyDown, onClick }: IProps) => (
    <div className="container">
        <span className="calendarIconWrapper">
            <CalendarIcon />
        </span>
        <input
            type="text"
            className="styledInput"
            placeholder="yyyy-mm-dd"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
        <span
            className="clearIconWrapper"
            onClick={onClick}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === "Space") {
                    onClick();
                }
            }}
            tabIndex={0}
            role="button">
            <ClearIcon />
        </span>
    </div>
));
