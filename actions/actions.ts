import { Student } from "@/lib/types";
import axios from "axios";


export const fetchStudents = async (): Promise<Student[]> => {
  try {
    const res = await axios.get("/api");
    const allStudents = res.data;
    return allStudents;
  } catch (error) {
    console.error("Error fetching students: ", error);
    throw new Error("Failed to fetch students.");
  }
}

export const addStudent = async (student: Partial<Student>): Promise<Student> => {
  try {
    const res = await axios.post("/api", student);
    const newStudent = res.data;
    return newStudent;
  } catch (error) {
    console.error("Error adding student: ", error);
    throw new Error("Failed to add student.");
  }
}

export const deleteStudent = async (id: number): Promise<Student> => {
  try {
    const res = await axios.delete('/api', { data: id });
    const deletedStudent = res.data;
    return deletedStudent;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete student.");
  }
}

export const updateStudent = async (student: Student): Promise<Student> => {
  try {
    const res = await axios.put('/api', student);
    const updatedStudentData = res.data;
    return updatedStudentData;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to updated student');
  }
}


