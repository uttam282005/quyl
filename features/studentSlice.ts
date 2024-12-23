import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterStudentListProps, SearchProps, Student } from "@/lib/types";

// Initial state for studentSlice
const initialState: Student[] = [];
const globalState: Student[] = [];

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
    setStudents: (state, action: PayloadAction<Student[]>) => {
      return action.payload;
    },
    filterStudent: (state, action: PayloadAction<FilterStudentListProps>) => {
      if (action.payload.cohort == "All" || action.payload.class == "All") return action.payload.globalState;
      return action.payload.globalState.filter((student) => {
        return (
          student.cohort === action.payload.cohort &&
          student.class === action.payload.class
        );
      });
    },
    searchStudent: (state, action: PayloadAction<SearchProps>) => {
      const { query, globalState } = action.payload;
      const lowerCaseQuery = query.toLowerCase();

      return globalState.filter((student) => {
        // Check if the query matches the class
        const matchesClass = student.class.toLowerCase().includes(lowerCaseQuery);

        // Check if the query matches any part of the name
        const matchesName = student.name
          .toLowerCase()
          .split(' ')
          .some((nameSegment) => nameSegment.includes(lowerCaseQuery));

        // Check if the query matches the cohort
        const matchesCohort = student.cohort.toLowerCase().includes(lowerCaseQuery);

        // Check if the query matches any of the courses
        const matchesCourses = student.courses.some((course) =>
          course.toLowerCase().includes(lowerCaseQuery)
        );

        // Return true if the query matches any field
        return matchesClass || matchesName || matchesCohort || matchesCourses;
      });
    }
  }
});

export const globalStateSlice = createSlice(({
  name: "globalState",
  initialState: globalState,
  reducers: {
    setGlobalState: (state, action) => {
      return action.payload;
    }
  }
}));

export const { addStudent, removeStudent, updateStudent, setStudents, filterStudent, searchStudent } = studentSlice.actions;
export const { setGlobalState } = globalStateSlice.actions;
export default studentSlice;
