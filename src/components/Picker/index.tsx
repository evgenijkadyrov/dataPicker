import { memo } from "react";

import { CalendarIcon, ClearIcon } from "@/components/Icons/";

import { IProps } from "./picker.interface";

import "./styles.scss";

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
