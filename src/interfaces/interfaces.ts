export interface IDate {
    day: number;
    month: number;
    year: number;
}

export interface ISelectedDate {
    month: number | undefined;
    year: number | undefined;
    day: number | undefined;
}

export interface IMinMaxDate {
    month: number;
    year: number;
}

export type Field = "month" | "year";
