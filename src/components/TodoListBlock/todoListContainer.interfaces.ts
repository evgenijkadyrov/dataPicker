import { KeyboardEvent, SyntheticEvent } from "react";

import { ISelectedDate, ITodo } from "@/interfaces";

export interface IProps {
    todo: string;
    handleChange: (e: SyntheticEvent) => void;
    todoList: ITodo[];
    selectedDate: ISelectedDate;
    handleDeleteTodo: (id: number) => void;
    handleAddNewTodo: (e: KeyboardEvent<HTMLInputElement>) => void;
    isAddTodo: boolean;
    handleClickAddButton: () => void;
    handleChangeStatus: (id: number) => void;
}
