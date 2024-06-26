import { getDataFromStorage } from "@/helpers/calculate";
import { ISelectedDate } from "@/interfaces";

export const isDayHaveTodo = (date: ISelectedDate): boolean => {
    const todolist = getDataFromStorage();

    if (todolist) {
        return todolist.some(
            (el) =>
                el.date.day === date.day &&
                el.date.month === date.month &&
                el.date.year === date.year
        );
    }

    return false;
};
