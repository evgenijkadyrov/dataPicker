import {
    ComponentType,
    Dispatch,
    KeyboardEvent,
    ReactElement,
    SetStateAction,
    SyntheticEvent,
    useEffect,
    useState,
} from "react";

import { TodoListBlock } from "@/components";
import { getDataFromStorage } from "@/helpers";
import { IDate, ISelectedDate, ITodo } from "@/interfaces";

export function withAddTodolist<T>(
    Component: ComponentType<T>,
    selectedDate: ISelectedDate,
    setSelectedDate: Dispatch<SetStateAction<ISelectedDate>>,
    shownDate: IDate,
    setShownDate: (value: IDate) => void
) {
    return (
        hocProps: Omit<
            T,
            "selectedDate" | "setSelectedDate" | "setShownDate" | "handleDayClick"
        >
    ) => {
        const [todo, setTodo] = useState<string>("");
        const [todoList, setTodoList] = useState<ITodo[]>(() => getDataFromStorage());
        const [isAddTodo, setIsAddTodo] = useState(false);
        useEffect(() => {
            localStorage.setItem("todoList", JSON.stringify(todoList));
        }, [todoList]);
        const handleChange = (e: SyntheticEvent) => {
            const target = e.target as HTMLInputElement;

            setTodo(target.value);
        };
        const handleDeleteTodo = (id: number): void => {
            const newTodoList = todoList.filter((item) => item.id !== id);
            setTodoList(newTodoList);
        };
        const handleAddNewTodo = (e: KeyboardEvent<HTMLInputElement>): void => {
            if (e.key !== "Enter") {
                return;
            }
            if (!todo.trim()) {
                return;
            }

            setTodoList((prevTodoList) => [
                ...prevTodoList,
                { id: Date.now(), date: selectedDate, content: todo, status: false },
            ]);
            setIsAddTodo(false);
            setTodo("");
        };
        const handleChangeStatus = (id: number) => {
            const copy = todoList.map((task) =>
                task.id === id ? { ...task, status: !task.status } : task
            );
            setTodoList(copy);
        };
        const handleClickAddButton = () => {
            setIsAddTodo(true);
        };
        const handleDayClick = (e: SyntheticEvent): void => {
            const target = e.target as HTMLElement;
            setSelectedDate({
                year: shownDate?.year,
                month: shownDate?.month,
                day: parseInt(target.innerText, 10),
            } as ISelectedDate);
        };
        const renderTodolist = (): ReactElement => (
            <TodoListBlock
                todo={todo}
                handleChange={handleChange}
                todoList={todoList}
                handleAddNewTodo={handleAddNewTodo}
                handleDeleteTodo={handleDeleteTodo}
                selectedDate={selectedDate}
                handleClickAddButton={handleClickAddButton}
                isAddTodo={isAddTodo}
                handleChangeStatus={handleChangeStatus}
            />
        );

        return (
            <Component
                {...(hocProps as T)}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                handleDayClick={handleDayClick}
                renderTodolist={renderTodolist}
                shownDate={shownDate}
                todoList={todoList}
                setShownDate={setShownDate}
            />
        );
    };
}
