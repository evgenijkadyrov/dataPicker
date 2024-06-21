import { ITodo } from "@/hocs/withAddTodo";
import { ISelectedDate } from "@/interfaces/interfaces";

export interface IProps {
    todoList: ITodo[];
    selectedDate: ISelectedDate;
    handleDeleteTodo: (id: number) => void;
    handleChangeStatus: (id: number) => void;
}
