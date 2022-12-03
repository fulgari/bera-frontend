import { createSlice } from "@reduxjs/toolkit";
import { verifyTodoPayload } from "../../utils/verify";

type todoRecordType = { id: string, title: string, description: string, state: string, date: string, priority: string, dueDate: string };

const basicDashboardSlice = createSlice({
    name: "basicDashboard",
    initialState: {
        todos: [] as todoRecordType[],
    },
    reducers: {
        addTodo: (state, action) => {
            if (verifyTodoPayload(action.payload)) {
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

export const { addTodo, updateTodo } = basicDashboardSlice.actions;
export default basicDashboardSlice.reducer;
