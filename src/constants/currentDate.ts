import { IDate } from "@/interfaces";

export const CURRENT_DATE: IDate = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
};
