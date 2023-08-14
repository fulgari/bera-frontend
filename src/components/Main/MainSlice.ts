import { createSlice } from '@reduxjs/toolkit'

const oneWeek = 7 * 24 * 60 * 60 * 1000

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    // 与今天的时间差
    dateDelta: 0,
    isDarkMode: typeof window !== 'undefined' ? localStorage.theme === 'dark' : false,
    authToken: ''
  },
  reducers: {
    resetDelta: (state, action) => {
      state.dateDelta = 0
    },
    addDelta: (state, action) => {
      state.dateDelta += oneWeek
    },
    minusDelta: (state, action) => {
      state.dateDelta -= oneWeek
    },
    toggleDarkMode: (state, action) => {
      state.isDarkMode = action.payload
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload
    }
  }
})

export const { resetDelta, addDelta, minusDelta } = mainSlice.actions
export default mainSlice.reducer
