import { getTodosFromStorage } from "@/helpers";

describe("getTodosFromStorage", () => {
    beforeEach(() => {
        localStorage.removeItem("todoList");
    });

    it('should return an array of ITodo objects if "todoList" item in localStorage is a valid JSON string', () => {
        const todos = [
            { id: 1, title: "Task 1", completed: false },
            { id: 2, title: "Task 2", completed: true },
        ];
        localStorage.setItem("todoList", JSON.stringify(todos));

        const result = getTodosFromStorage();
        expect(result).toEqual(todos);
    });
});
