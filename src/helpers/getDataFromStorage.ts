import { ITodo } from "@/hocs/withAddTodo";

export const getTodosFromStorage = () => {
    const value = localStorage.getItem("todoList");
    return JSON.parse(value) as ITodo[];
};
