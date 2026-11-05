// use as go-by for other reducer files
import { createSlice } from '@reduxjs/toolkit'
const ADMIN_EMAIL = 'chris.temp.level.0@gmail.com'

// name property is never used in code, only internally, lowercase is convention
const userSlice = createSlice({
  name: 'user',
  initialState: { 
    name: null,
    email: null,
    isAdmin: false,
    pic_url: null
  },
  
  // payload is the default property on the action

  reducers: {

    // the server returns false or a user object if someone is logged in
    initializeUser: (state, action) => {
      const user = action.payload || {}
      state.name = user.name
      state.email = user.email
      state.isAdmin = (user.email === ADMIN_EMAIL)
      state.pic_url = user.pic_url
    }
  }

})

// use named exports
export const { initializeUser } = userSlice.actions
export const User = userSlice.reducer