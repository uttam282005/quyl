import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/db/db';

export async function GET(req: NextRequest) {
  try {
    const students = await prisma.student.findMany();
    return NextResponse.json(students);
  } catch (error) {
    console.error("Api error: ", error)
    return NextResponse.json({ message: 'Failed to fetch students' });
  }
}

export async function POST(req: NextRequest) {
  try {
    const studentData = await req.json();
    const newStudent = await prisma.student.create({
      data: {
        ...studentData,
      }
    })
    return NextResponse.json(newStudent);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to add student' });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = await req.json();
    const deleteStudent = await prisma.student.delete({
      where: {
        id
      }
    });
    return NextResponse.json(deleteStudent);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Failed to delete student' });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...studentData } = await req.json();
    console.log(id, studentData)
    const updatedStudent = await prisma.student.update({
      where: {
        id
      },
      data: {
        ...studentData
      }
    });
    return NextResponse.json(updatedStudent);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to update student' });
  }
}
