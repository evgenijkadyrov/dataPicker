import { getTodosFromStorage } from "@/helpers";
import { ISelectedDate } from "@/interfaces";

export const isDayHaveTodo = (date: ISelectedDate): boolean => {
    const todolist = getTodosFromStorage();

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
