import { createSlice } from '@reduxjs/toolkit'

const oneWeek = 7 * 24 * 60 * 60 * 1000

const unloginModalSlice = createSlice({
  name: 'unloginModal',
  initialState: {
    email: '',
    password: ''
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    }
  }
})

export const { setEmail, setPassword } = unloginModalSlice.actions
export default unloginModalSlice.reducer
