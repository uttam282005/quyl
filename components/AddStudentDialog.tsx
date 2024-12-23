
'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Plus } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import type { AddStudentDialogProps, Student } from "@/lib/types"
import { addStudent as addStudentAction, updateStudent as updateStudentAction } from "@/actions/actions"
import { useDispatch } from "react-redux"
import { addStudent, updateStudent } from "@/features/studentSlice"

export function AddStudentDialog({ type, student }: AddStudentDialogProps) {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Student>({
    id: student?.id || -1,
    name: student?.name || "",
    cohort: student?.cohort || "AY 2024-25",
    courses: student?.courses || [],
    dateJoined: student?.dateJoined || new Date(Date.now()),
    lastLogin: student?.lastLogin || new Date(Date.now()),
    status: student?.status || true,
    class: student?.class || "CBSE 9"
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (type === "add") {
        const newStudentData = {
          ...formData,
          id: undefined,
          dateJoined: new Date(),
          lastLogin: new Date(),
        };
        const newStudent = await addStudentAction(newStudentData);
        dispatch(addStudent(newStudent));
      } else {
        const updatedStudent = await updateStudentAction(formData);
        dispatch(updateStudent(updatedStudent))
      }
      console.log("Submitting student:", formData)
      setOpen(false)
    } catch (error) {
      console.error("Error adding student:", error)
      setOpen(false);
    }
  }

  const availableCourses = [
    "CBSE 9 Science",
    "CBSE 9 Maths",
    "CBSE 8 Science",
    "CBSE 8 Maths"
  ]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {
          type === "update" ? (
            <Button className={"bg-blue-200"} variant="outline" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
          ) : (
            <Button className="bg-[#E9EDF1] text-[#3F526E] font-bold text-[14px] sm:text-[16px] w-full sm:w-[197px] h-[36px] hover:bg-gray-50">
              <Plus className="w-4 h-4 mr-1" />
              Add new Student
            </Button>
          )
        }
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{type === "add" ? "Add New Student" : "Update Student Data"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[60vh] overflow-y-auto">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="cohort">Cohort</Label>
            <Select
              value={formData.cohort}
              onValueChange={(value) => setFormData({ ...formData, cohort: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select cohort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AY 2024-25">AY 2024-25</SelectItem>
                <SelectItem value="AY 2023-24">AY 2023-24</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="class">Class</Label>
            <Select
              value={formData.class}
              onValueChange={(value) => setFormData({ ...formData, class: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CBSE 8">CBSE 8</SelectItem>
                <SelectItem value="CBSE 9">CBSE 9</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full gap-1.5">
            <Label>Courses</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {availableCourses.map((course) => (
                <div key={course} className="flex items-center space-x-2">
                  <Checkbox
                    id={course}
                    checked={formData.courses?.includes(course)}
                    onCheckedChange={(checked) => {
                      setFormData({
                        ...formData,
                        courses: checked
                          ? [...(formData.courses || []), course]
                          : formData.courses?.filter((c) => c !== course) || []
                      })
                    }}
                  />
                  <Label htmlFor={course}>{course}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="status">Status</Label>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="status"
                checked={formData.status}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, status: checked as boolean })
                }
              />
              <Label htmlFor="status">Active</Label>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
            <Button variant="outline" type="button" onClick={() => setOpen(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button type="submit" className="w-full sm:w-auto">{type === "update" ? "Update student" : "Add student"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}


