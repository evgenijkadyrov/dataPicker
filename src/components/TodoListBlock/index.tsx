import { memo } from "react";

import { TodoList } from "@/components";
import { CURRENT_DATE } from "@/constants";
import { compareDateForTodo } from "@/helpers";

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
                <button
                    onClick={handleClickAddButton}
                    className="addTodo"
                    type="button"
                    disabled={!compareDateForTodo(CURRENT_DATE, selectedDate)}>
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
            {!compareDateForTodo(CURRENT_DATE, selectedDate) && (
                <div className="error">
                    Can not create task for past period. Please select another day.
                </div>
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
