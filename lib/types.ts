export type Student = {
  id: number;
  name: string;
  cohort: string;
  dateJoined: Date;
  lastLogin?: Date;
  status: boolean;
  courses: number[];
};

export type Course = {
  id: number;
  name: string;
  instructor: string;
  instructorImage: string;
};

export type StudentPageProps = {
  students: Student[]
}
