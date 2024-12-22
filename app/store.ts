import { configureStore } from "@reduxjs/toolkit";
import { globalStateSlice, studentSlice } from "@/features/studentSlice";

export const store = configureStore({
  reducer: {
    students: studentSlice.reducer,
    globalState: globalStateSlice.reducer
  }
});

// Extracts the return type of the getState funciton
export type RootState = ReturnType<typeof store.getState>;
