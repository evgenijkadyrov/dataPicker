import { ISelectedDate, ITodo } from "@/interfaces";

export interface IProps {
    todoList: ITodo[];
    selectedDate: ISelectedDate;
    handleDeleteTodo: (id: number) => void;
    handleChangeStatus: (id: number) => void;
}
