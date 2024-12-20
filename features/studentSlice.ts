import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "@/lib/types";

// Initial state for studentSlice
const initialState: Student[] = [];

export const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      const newStudent = action.payload;
      state.push(newStudent);
    },
    removeStudent: (state, action: PayloadAction<number>) => {
      return state.filter(student => student.id !== action.payload);
    },
    updateStudent: (state, action: PayloadAction<Student>) => {
      const index = state.findIndex(student => student.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  }
});


export const { addStudent, removeStudent, updateStudent } = studentSlice.actions;
export default studentSlice;
