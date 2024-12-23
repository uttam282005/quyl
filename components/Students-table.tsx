
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
    <Table className="bg-white rounded-md">
      <TableHeader>
        <TableRow >
          <TableHead className="font-bold text-black">Student Name</TableHead>
          <TableHead className="font-bold text-black">Cohort</TableHead>
          <TableHead className="font-bold text-black">Courses</TableHead>
          <TableHead className="font-bold text-black">Date Joined</TableHead>
          <TableHead className="font-bold text-black">Last login</TableHead>
          <TableHead className="font-bold text-black">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students &&
          students.map((student: Student) => (
            <TableRow key={student.name}>
              <TableCell className="font-sans">{student.name}</TableCell>
              <TableCell className="font-sans">{student.cohort}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {student.courses.map((course, index) => (
                    <div className="flex items-center bg-gray-50 gap-[4px] pt-[2px] pb-[2px] pl-[4px] pr-[8px] rounded-[6px] w-[134.97px] h-[24px]" key={index}>
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
                  className={`ml-3 w-[14.4px] h-[14px] rounded-full ${student.status ? "bg-[#4AEA40]" : "bg-[#EA4E40]"
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

