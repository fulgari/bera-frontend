import { createSlice } from '@reduxjs/toolkit'

const oneWeek = 7 * 24 * 60 * 60 * 1000

const unloginModalSlice = createSlice({
  name: 'unlogin',
  initialState: {
    username: '',
    password: ''
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    }
  }
})

export const { setUsername, setPassword } = unloginModalSlice.actions
export default unloginModalSlice.reducer
