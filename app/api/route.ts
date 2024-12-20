import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/db/db';

export async function GET(req: NextRequest) {
  console.log("Hello world")
  try {
    const allStudents = await prisma.student.findMany();
    return NextResponse.json(allStudents);
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Failed to fetch students' });
  }
}

export async function POST(req: NextRequest) {
  try {
    const student = await req.json();
    const { courses, ...studentData } = student;
    const newStudent = await prisma.student.create({
      data: {
        ...studentData,
        courses: {
          connect: courses.map((id: number) => ({ id }))
        }
      }
    })
    return NextResponse.json(newStudent);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to add student' });
  }
}

