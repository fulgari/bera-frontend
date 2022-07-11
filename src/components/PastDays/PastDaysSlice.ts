import { createSlice } from "@reduxjs/toolkit";

 const passDaysSlice = createSlice({
  name: "passDays",
  initialState: [{ title: "", description: "", state: "", date: "", priority: "", dueDate: "" }],
  reducers: {
    add: (state, action) => {
      state.passDays = [...state.passDays, action.payload];
    },
  },
});

export const { add } = passDaysSlice.actions
export default passDaysSlice.reducer