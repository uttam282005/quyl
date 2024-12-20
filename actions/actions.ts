import { Student } from "@/lib/types";
import axios from 
import prisma from "../db/db";


export const fetchStudents = async (): Promise<Student[]> => {
  try {
    const allStudents = await.
    return allStudents;
  } catch (error) {
    console.error("Error fetching students: ", error);
    throw new Error("Failed to fetch students.");
  }
}

export const addStudent = async (student: Student) => {
  try {
    const { courses, ...studentData } = student;
    const newStudent = await prisma.student.create({
      data: {
        ...studentData,
        courses: {
          connect: courses.map(id => ({ id }))
        }
      }
    })
    return newStudent;
  } catch (error) {
    console.error("Error adding student: ", error);
    throw new Error("Failed to add student.");
  }
}



