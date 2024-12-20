import { configureStore } from "@reduxjs/toolkit";
import { studentSlice } from "@/features/studentSlice";

export const store = configureStore({
  reducer: studentSlice.reducer
});
console.log(store.getState());
// Extracts the return type of the getState funciton
export type RootState = ReturnType<typeof store.getState>;
