"use client"

import { Layout } from "@/components/Layout"
import { Header } from "@/components/Header"
import { StudentsTable } from "@/components/Students-table"
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus } from 'lucide-react'
import { fetchStudents } from "@/actions/actions"
import { Student } from "@/lib/types"



export default async function StudentsPage() {
  // const students = useSelector(state: RootState => state);
  // const dispatch = useDispatch();
  // console.log(students)
  return (
    <Layout>
      <Header />
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            <Select defaultValue="AY 2024-25">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AY 2024-25">AY 2024-25</SelectItem>
                <SelectItem value="AY 2023-24">AY 2023-24</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="CBSE 9">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CBSE 9">CBSE 9</SelectItem>
                <SelectItem value="CBSE 10">CBSE 10</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add new Student
          </Button>
        </div>
        <StudentsTable students={[]} />
      </div>
    </Layout>
  )
}


