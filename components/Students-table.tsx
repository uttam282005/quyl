
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Student } from "@/lib/types"
import { BeakerIcon, Trash2 } from "lucide-react"
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student Name</TableHead>
          <TableHead>Cohort</TableHead>
          <TableHead>Courses</TableHead>
          <TableHead>Date Joined</TableHead>
          <TableHead>Last login</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students &&
          students.map((student: Student) => (
            <TableRow key={student.name}>
              <TableCell className="font-medium font-sans">{student.name}</TableCell>
              <TableCell>{student.cohort}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {student.courses.map((course, index) => (
                    <div className="flex items-center bg-gray-50 gap-[4px] pt-[2px] pb-[2px] pl-[4px] pr-[8px]" key={index}>
                      <div className="pr-0">
                        {
                          course.includes("Maths") ?
                            <Image alt="maths instructor" src={"/maths.png"} width={20} height={20} />
                            :
                            (course.includes("Science") ?
                              <Image className="rounded-[4px] w-[20px] h-[20px]" src={"/science.png"} alt="sicence instructor" width={20} height={20} />
                              :
                              <div className="bg-red-100 p-1 rounded">
                                <BeakerIcon className="w-4 h-4 text-red-600" />
                              </div>
                            )
                        }
                      </div>
                      <div className="w-[100px] text-center font-medium">{course}</div>
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell>{formatDate(student.dateJoined, "dateJoined")}</TableCell>
              <TableCell>{formatDate(student.lastLogin, "lastLogin")}</TableCell>
              <TableCell>
                <div
                  className={`w-2 h-2 rounded-full ${student.status ? "bg-green-500" : "bg-red-500"
                    }`}
                />
              </TableCell>
              <TableCell>
                <AddStudentDialog type="update" student={student} />
                <Button className={"ml-2 bg-red-500"} variant="outline" size="icon" onClick={() => handleDelete(student.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table >
  )
}

