import { createSlice } from "@reduxjs/toolkit";
import { verifyTodoRecord } from "../../utils/verify";

type TodoRecordType = {
    id: string,
    date: string,
    listId: string | null,
    note: string | null,
    text: string,
    done: boolean,
    updatedAt: string,
    createdAt: string,
    isMD: boolean | null,
    tags: string | null
};

const basicDashboardSlice = createSlice({
    name: "basicDashboard",
    initialState: {
        todos: [] as TodoRecordType[],
    },
    reducers: {
        setupTodos: (state, action) => {
            const todos: any[] = action.payload;
            console.log("setup todos",todos)
            if (todos.every(todo => verifyTodoRecord(todo))) {
                state.todos = action.payload;
            }
        },
        addTodo: (state, action) => {
            if (verifyTodoRecord(action.payload)) {
                state.todos = [...state.todos, action.payload];
                console.log("[redux] addTodo, new state: ", state.todos);
            } else {
                console.error("[FAILED] addTodo() got invalid todo payload: ", action.payload)
            }
        },
        updateTodo: (state, action) => {
            const { payload } = action;
            const todoIndex = state.todos.findIndex(todo => todo.id === payload.id);
            if (todoIndex !== -1) {
                const todo = state.todos[todoIndex];
                state.todos.splice(todoIndex, 1, { ...todo, ...payload });
                console.log("[redux] updateTodo, from: ", todo, " to: ", payload, state.todos);
            }
        }
    },
});

export type { TodoRecordType };
export const { addTodo, updateTodo } = basicDashboardSlice.actions;
export default basicDashboardSlice.reducer;