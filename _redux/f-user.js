// use as go-by for other reducer files
import { createSlice } from '@reduxjs/toolkit'
const ADMIN_EMAIL = 'chris.temp.level.0@gmail.com'

// name property is never used in code, only internally, lowercase is convention
const userSlice = createSlice({
  name: 'user',
  initialState: { 
    email: null,
    isAdmin: false 
  },

  // payload is the default property on the action
  reducers: {
    initializeUser: (state, action) => {
      const email = action.payload
      state.email = email
      state.isAdmin = (email === ADMIN_EMAIL)
    }
  }
})

// use named exports
export const { initializeUser } = userSlice.actions
export const User = userSlice.reducer