import { KeyboardEvent, SyntheticEvent } from "react";

import { ITodo } from "@/hocs/withAddTodo";
import { ISelectedDate } from "@/interfaces/interfaces";

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
