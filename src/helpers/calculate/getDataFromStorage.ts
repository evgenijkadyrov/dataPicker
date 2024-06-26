import { ITodo } from "@/interfaces";

export const getDataFromStorage = () => {
    const value = localStorage.getItem("todoList");
    return JSON.parse(value) as ITodo[];
};
