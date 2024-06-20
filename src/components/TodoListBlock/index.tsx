import { memo } from "react";

import { TodoList } from "@/components";

import { IProps } from "./todoListContainer.interfaces";

import "./styles.scss";

export const TodoListBlock = memo<IProps>(
    ({
        todo,
        handleDeleteTodo,
        todoList,
        selectedDate,
        handleChange,
        handleAddNewTodo,
        isAddTodo,
        handleClickAddButton,
        handleChangeStatus,
    }) => (
        <>
            {!isAddTodo ? (
                <button onClick={handleClickAddButton} className="addTodo" type="button">
                    +
                </button>
            ) : (
                <input
                    className="input"
                    type="text"
                    value={todo}
                    onChange={handleChange}
                    placeholder="Create a new todo..."
                    onKeyDown={handleAddNewTodo}
                />
            )}
            <TodoList
                todoList={todoList}
                selectedDate={selectedDate}
                handleDeleteTodo={handleDeleteTodo}
                handleChangeStatus={handleChangeStatus}
            />
        </>
    )
);
