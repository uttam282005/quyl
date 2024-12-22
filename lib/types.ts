export type Student = {
  id: number;
  name: string;
  cohort: string;
  dateJoined: Date;
  lastLogin: Date;
  status: boolean;
  courses: string[];
  class: string;
};

export type FilterStudentListProps = {
  globalState: Student[];
  cohort: string;
  class: string;
};

export type SearchProps = {
  globalState: Student[];
  query: string;
};

export type AddStudentDialogProps = {
  type: "update" | "add";
  student?: Student;
};


