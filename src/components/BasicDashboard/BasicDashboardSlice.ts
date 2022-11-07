import { createSlice } from "@reduxjs/toolkit";

type todoRecordType = { title: string, description: string, state: string, date: string, priority: string, dueDate: string };

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
    },
});

export const { addTodo } = basicDashboardSlice.actions;
export default basicDashboardSlice.reducer;
