import { createSlice } from "@reduxjs/toolkit";


export const registerUserSlice = createSlice({
  name: "userDetails",
  initialState: {
    useremail:"",
    userpassword:"",
  },
  reducers: {
   
    setRegistrationDetails: (state, action) => {
      state.useremail = action.useremail;
      state.userpassword = action.userpassword;
    },
    resetRegistrationDetails: (state) => {
      state.useremail = "";
      state.userpassword = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRegistrationDetails, resetRegistrationDetails } = registerUserSlice.actions;

export default registerUserSlice.reducer;
