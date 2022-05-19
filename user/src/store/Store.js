import { configureStore } from "@reduxjs/toolkit";
import initialiseUserDetailsSlice from "../Slice/initialiseUserDetailsSlice";
import registerUserSlice from "../Slice/registerUserSlice";

export const store = configureStore({
  reducer: {
    userDetails: initialiseUserDetailsSlice,
    registrationDetails: registerUserSlice,
  },
});
