"use client"

import { Layout } from "@/components/Layout"
import { Header } from "@/components/Header"
import { StudentsTable } from "@/components/Students-table"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Select, SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RootState } from "./store"
import { Student, FilterStudentListProps } from "@/lib/types"
import { filterStudent } from "@/features/studentSlice"
import { AddStudentDialog } from "@/components/AddStudentDialog"
import { useFetchStudents } from "@/hooks"

export default function StudentsPage() {
  const dispatch = useDispatch();
  const globalState = useSelector((state: RootState) => state.globalState);
  const students: Student[] = useSelector((state: RootState) => state.students);
  const [filterState, setFilterState] = useState<FilterStudentListProps>({
    globalState,
    cohort: "All",
    class: "All"
  });


  useFetchStudents();

  const handleFilterChange = (key: keyof FilterStudentListProps, value: string) => {
    const updatedFilter = { ...filterState, [key]: value, globalState };
    setFilterState(updatedFilter);
    dispatch(filterStudent(updatedFilter));
  }

  return (
    <Layout>
      <Header />
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            <Select onValueChange={(value: string) => handleFilterChange("cohort", value)} defaultValue="All">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="AY 2024-25">AY 2024-25</SelectItem>
                <SelectItem value="AY 2023-24">AY 2023-24</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="All" onValueChange={(value) => handleFilterChange("class", value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="CBSE 8">CBSE 8</SelectItem>
                <SelectItem value="CBSE 9">CBSE 9</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <AddStudentDialog type="add" />
        </div>
        <StudentsTable students={students} />
      </div>
    </Layout >
  )
}

