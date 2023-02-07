import { createSlice } from "@reduxjs/toolkit";

export const roleReducer = createSlice({
  name: "role",
  initialState: {
    roles: [],
    role: {},
  },
  reducers: {
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    deleteRole: (state, action) => {
      state.roles = state.roles.filter((role) => role.id !== action.payload);
    },
  },
});

export const { setRoles, setRole, deleteRole } = roleReducer.actions;

export default roleReducer.reducer;
