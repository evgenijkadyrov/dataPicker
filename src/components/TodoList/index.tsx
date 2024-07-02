import { memo, useRef } from "react";

import { ClearIcon } from "@/components/Icons";
import { NumberOfVisibleTodolists } from "@/constants";
import { compareDate } from "@/helpers";
import { IDate } from "@/interfaces";

import { IProps } from "./todoList.interfaces";

import "./styles.scss";

export const TodoList = memo(
    ({ todoList = [], selectedDate, handleDeleteTodo, handleChangeStatus }: IProps) => {
        const filteredTodoList = todoList.filter((item) =>
            compareDate(item.date as IDate, selectedDate)
        );

        const listRef = useRef<HTMLUListElement | null>(null);
        const handleChange = (id: number) => () => {
            handleChangeStatus(id);
        };
        return (
            <ul
                ref={listRef}
                className={
                    filteredTodoList.length > NumberOfVisibleTodolists ? "scrollable" : ""
                }>
                {filteredTodoList.map(({ id, content, status }) => (
                    <li key={id}>
                        <input
                            type="checkbox"
                            onChange={handleChange(id)}
                            checked={status}
                        />
                        <p>{content}</p>
                        <button
                            type="button"
                            onClick={() => handleDeleteTodo(id)}
                            data-testid="deleteTodoButton">
                            <ClearIcon />
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
);
