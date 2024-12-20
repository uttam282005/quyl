import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Student } from "@/lib/types"
import { BeakerIcon, Calculator } from 'lucide-react'

export function StudentsTable({ students }: { students: Student[] }) {

  console.log(students);
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
        {students && students.map((student: Student) => (
          <TableRow key={student.name}>
            <TableCell className="font-medium">{student.name}</TableCell>
            <TableCell>{student.cohort}</TableCell>
            <TableCell>
              <div className="flex gap-4">
                <div className="flex items-center gap-1">
                  <div className="bg-red-100 p-1 rounded">
                    <BeakerIcon className="w-4 h-4 text-red-600" />
                  </div>
                  <span>CBSE 9 Science</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-blue-100 p-1 rounded">
                    <Calculator className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>CBSE 9 Math</span>
                </div>
              </div>
            </TableCell>
            {/* <TableCell>{student.dateJoined}</TableCell> */}
            {/* <TableCell>{student.lastLogin}</TableCell> */}
            <TableCell>
              <div className={`w-2 h-2 rounded-full ${student.status ? 'bg-green-500' : 'bg-red-500'}`} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

