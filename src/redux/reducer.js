import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    EmployeeDetails: (state, action) => {},
    handleStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export default authSlice;
export const { userExists, userNotExists, handleStep } = authSlice.actions;
