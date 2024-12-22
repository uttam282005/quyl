import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStudents } from "@/actions/actions";
import { setStudents, setGlobalState } from "@/features/studentSlice";



export const useFetchStudents = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchStudentList = async () => {
      try {
        const students = await fetchStudents();
        dispatch(setGlobalState(students));
        dispatch(setStudents(students));
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchStudentList();
  }, [dispatch])
}
