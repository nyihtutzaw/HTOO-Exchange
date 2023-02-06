import { createSlice } from '@reduxjs/toolkit'
import { registerUser, userLogin } from './authActions'


// const userToken = localStorage.getItem('userToken')
//   ? localStorage.getItem('userToken')
//   : null

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      // ...logout reducer
      localStorage.removeItem('userToken') // deletes token from storage
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
    },
  },

  // extraReducers: (action) {
  //   // login user
  //   // [userLogin.pending]: (state) => {
  //   //   state.loading = true
  //   //   state.error = null
  //   // },

  //   //   [userLogin.fulfilled]: (state, action) => {
  //   //     console.log('action', action)

  //   //     // state.loading = false
  //   //     state.userInfo = action.payload
  //   //     // state.userToken = payload.data.token
  //   //   },

  //     // [userLogin.fulfilled]: (state, {payload}) => {
  //     //   console.log('payload', payload)

  //     //   // state.loading = false
  //     //   // state.userInfo = payload
  //     //   // state.userToken = payload.data.token
  //     // },

  //       [userLogin.rejected]: (state, { payload }) => {
  //         state.loading = false
  //         state.error = payload
  //       },

  //   // builder.addCase(userLogin.pending, (state) => {
  //   //   state.loading = true;
  //   //   state.error = null
  //   // });
  //   // builder.addCase(userLogin.fulfilled, (state, action) => {
  //   //   console.log("action", action)

  //   //   (state.loading = false),
  //   //     (state.userInfo = action),
  //   //     state.userToken = action.payload.data.token
  //   //       (state.error = null);
  //   // });
  //   // builder.addCase(userLogin.rejected, (state, action) => {
  //   //   (state.loading = false),
  //   //     (state.error = action);
  //   // });


  //   // register user
  //   // [registerUser.pending]: (state) => {
  //   //   state.loading = true
  //   //   state.error = null
  //   // },
  //   // [registerUser.fulfilled]: (state, { payload }) => {
  //   //   state.loading = false
  //   //   state.success = true // registration successful
  //   // },
  //   // [registerUser.rejected]: (state, { payload }) => {
  //   //   state.loading = false
  //   //   state.error = payload
  //   // },
  // },

  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, {payload}) => {
      // console.log("act", action)
      state.loading = false
      state.userInfo = payload
      state.error = null;
    });
    builder.addCase(userLogin.rejected, (state, {payload}) => {
      // console.log("action reject", payload)
      state.loading = false
      state.error = payload;
    });
  },

})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer