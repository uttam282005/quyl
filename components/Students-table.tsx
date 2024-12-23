
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Student } from "@/lib/types"
import { BeakerIcon, Trash2 } from 'lucide-react'
import Image from "next/image"
import { AddStudentDialog } from "./AddStudentDialog"
import { formatDate } from "@/lib/utils"
import { useDispatch } from "react-redux"
import { deleteStudent } from "@/actions/actions"
import { removeStudent } from "@/features/studentSlice"
import { Button } from "./ui/button"

export function StudentsTable({ students }: { students: Student[] }) {
  const dispatch = useDispatch();

  const handleDelete = async (id: number) => {
    await deleteStudent(id);
    dispatch(removeStudent(id));
  }

  return (
    <div className="w-full overflow-x-auto bg-white rounded-md">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-black">Student Name</TableHead>
            <TableHead className="font-bold text-black hidden md:table-cell">Cohort</TableHead>
            <TableHead className="font-bold text-black">Courses</TableHead>
            <TableHead className="font-bold text-black hidden lg:table-cell">Date Joined</TableHead>
            <TableHead className="font-bold text-black hidden xl:table-cell">Last login</TableHead>
            <TableHead className="font-bold text-black hidden sm:table-cell">Status</TableHead>
            <TableHead className="font-bold text-black">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students &&
            students.map((student: Student) => (
              <TableRow key={student.name}>
                <TableCell className="font-sans">{student.name}</TableCell>
                <TableCell className="font-sans hidden md:table-cell">{student.cohort}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1 max-w-[200px] sm:max-w-none">
                    {student.courses.map((course, index) => (
                      <div className="flex items-center bg-gray-50 gap-[4px] pt-[2px] pb-[2px] pl-[4px] pr-[8px] rounded-[6px] w-full sm:w-[134.97px] h-[24px]" key={index}>
                        <div className="pr-0">
                          {
                            course.includes("Maths") ?
                              <Image alt="maths instructor" src={"/maths.png"} width={20} height={20} />
                              :
                              (course.includes("Science") ?
                                <Image className="rounded-[4px] w-[20px] h-[20px]" src={"/science.png"} alt="science instructor" width={20} height={20} />
                                :
                                <div className="bg-red-100 p-1 rounded">
                                  <BeakerIcon className="w-4 h-4 text-red-600" />
                                </div>
                              )
                          }
                        </div>
                        <div className="w-full sm:w-[100px] text-center font-medium truncate">{course}</div>
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="hidden lg:table-cell">{formatDate(student.dateJoined, "dateJoined")}</TableCell>
                <TableCell className="hidden xl:table-cell">{formatDate(student.lastLogin, "lastLogin")}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div
                    className={`ml-3 w-[14.4px] h-[14px] rounded-full ${student.status ? "bg-[#4AEA40]" : "bg-[#EA4E40]"
                      }`}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <AddStudentDialog type="update" student={student} />
                    <Button className="bg-red-500" variant="outline" size="icon" onClick={() => handleDelete(student.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}


