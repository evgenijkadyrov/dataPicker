import { ITodo } from "@/hocs";

export const getTodosFromStorage = () => {
    const value = localStorage.getItem("todoList");
    return JSON.parse(value) as ITodo[];
};
