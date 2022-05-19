import { createSlice } from "@reduxjs/toolkit";



export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    userid: "",
    email: "",
    password: "",
    username: "",
    fullname: "",
    city: "",
    ph_num: "",
    country: "",
    gender: "",
    userrole: "",
    industry: "",
    picture: "",
    resumelink: "",
    isLogin: false,
  }
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.isLogin;
    },
    setUserDetails: (state, action) => {
      state.userid = action.userid;
      state.email = action.email;
      state.password = action.password;
      state.username = action.username;
      state.fullname = action.fullname;
      state.city = action.city;
      state.ph_num = action.ph_num;
      state.country = action.country;
      state.gender = action.gender;
      state.userrole = action.userrole;
      state.industry = action.industry;
      state.picture = action.picture;
      state.resumelink = action.resumelink;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLogin, setUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
