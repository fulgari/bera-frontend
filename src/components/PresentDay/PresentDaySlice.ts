import { createSlice } from "@reduxjs/toolkit";

const presentDaySlice = createSlice({
  name: "presentDay",
  initialState: {
    toggle: { showModal: false },
    todoRecord: { title: "", description: "", state: "", date: "", priority: "", dueDate: "" },
  },
  reducers: {
    showModal: (state, action) => {
      state.toggle.showModal = action.payload.showModal;
    },
    generate: (state, action) => {
      state.todoRecord.title = action.payload.title;
      state.todoRecord.description = action.payload.description;
      state.todoRecord.state = action.payload.state;
      state.todoRecord.date = action.payload.date;
      state.todoRecord.priority = action.payload.priority;
      state.todoRecord.dueDate = action.payload.dueDate;
    },
  },
});

export const { showModal, generate } = presentDaySlice.actions;
export default presentDaySlice.reducer;
