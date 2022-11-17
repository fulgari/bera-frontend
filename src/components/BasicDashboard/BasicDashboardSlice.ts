import { createSlice } from "@reduxjs/toolkit";

type todoRecordType = { id: string, title: string, description: string, state: string, date: string, priority: string, dueDate: string };

const basicDashboardSlice = createSlice({
    name: "basicDashboard",
    initialState: {
        todos: [] as todoRecordType[],
    },
    reducers: {
        addTodo: (state, action) => {
            // const newTodo = {
            //     title: action.payload.title, 
            //     description: action.payload.description, 
            //     state: action.payload.state, 
            //     date: action.payload.date, 
            //     priority: action.payload.priority, 
            //     dueDate: action.payload.dueDate
            // }
            state.todos = [...state.todos, action.payload];
        },
        updateTodo: (state, action) => {
            const {payload} = action;
            const todoIndex = state.todos.findIndex(todo => todo.id === payload.id);
            if(todoIndex !== -1) {
                const todo = state.todos[todoIndex];
                state.todos.splice(todoIndex, 1, {...todo, ...payload});
            }
        }
    },
});

export const { addTodo, updateTodo } = basicDashboardSlice.actions;
export default basicDashboardSlice.reducer;
