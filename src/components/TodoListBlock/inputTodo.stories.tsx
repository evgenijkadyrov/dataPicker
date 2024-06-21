import React from "react";
import { action } from "@storybook/addon-actions";

import { TodoList } from "../TodoList";

const mockTodo = {
    id: 1718803189035,
    date: { day: 19, month: 5, year: 2024 },
    content: "hello",
    status: true,
};
export default {
    title: "Components/TodoList",
    component: TodoList,
};

export const Default = () => (
    <TodoList
        todoList={[mockTodo]}
        selectedDate={mockTodo.date}
        handleDeleteTodo={action("Delete Todo")}
        handleChangeStatus={action("Change CheckBox")}
    />
);
