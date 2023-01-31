import { createSlice } from "@reduxjs/toolkit";


const mainSlice = createSlice({
    name: "main",
    initialState: {
        // 定位当前周的锚点
        pivot: new Date()
    },
    reducers: {
        setPivot: (state, action) => {
            const date: Date = action.payload;
            state.pivot = date;
        },
    },
});

export const { setPivot } = mainSlice.actions;
export default mainSlice.reducer;