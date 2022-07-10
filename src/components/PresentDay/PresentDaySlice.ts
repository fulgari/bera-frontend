import { createSlice } from "@reduxjs/toolkit";

 const presentDaySlice = createSlice({
  name: "presentDay",
  initialState: { title: "", description: "", state: "", date: "", priority: "", dueDate: "" },
  reducers: {
    generate: (state, action) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.state = action.payload.state;
      state.date = action.payload.date;
      state.priority = action.payload.priority;
      state.dueDate = action.payload.dueDate;
    },
  },
});

export const { generate } = presentDaySlice.actions
export default presentDaySlice.reducer