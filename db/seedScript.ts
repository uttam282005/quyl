import prisma from "./db"

async function main() {
  // Create courses
  const courses = [
    { name: "CBSE 9 Science", instructor: "Dr. Anjali Mehta", instructorImage: "https://example.com/images/anjali.png" },
    { name: "CBSE 9 Math", instructor: "Mr. Ramesh Gupta", instructorImage: "https://example.com/images/ramesh.png" },
    { name: "CBSE 10 Science", instructor: "Dr. Sneha Sharma", instructorImage: "https://example.com/images/sneha.png" },
    { name: "CBSE 10 Math", instructor: "Mr. Rahul Verma", instructorImage: "https://example.com/images/rahul.png" },
    { name: "Physics Honors", instructor: "Dr. Kavita Joshi", instructorImage: "https://example.com/images/kavita.png" },
  ];
  const createdCourses = await Promise.all(
    courses.map((course) => prisma.course.create({ data: course }))
  );

  // Create students
  const students = [
    { name: "Anshuman Kashyap", cohort: "AY 2024-25", dateJoined: new Date("2024-11-01"), lastLogin: new Date("2024-11-15"), status: true, courses: [1, 2] },
    { name: "Bansi Dadhaniya", cohort: "AY 2024-25", dateJoined: new Date("2024-11-02"), lastLogin: new Date("2024-11-16"), status: true, courses: [1, 2] },
    { name: "Chandrika Valotia", cohort: "AY 2024-25", dateJoined: new Date("2024-11-03"), lastLogin: new Date("2024-11-14"), status: false, courses: [1] },
    { name: "Devang Dave", cohort: "AY 2024-25", dateJoined: new Date("2024-11-01"), lastLogin: new Date("2024-11-17"), status: true, courses: [2, 3] },
    { name: "Forum Bhatt", cohort: "AY 2024-25", dateJoined: new Date("2024-11-04"), lastLogin: new Date("2024-11-15"), status: true, courses: [3, 4] },
    { name: "Hrithika Dattani", cohort: "AY 2024-25", dateJoined: new Date("2024-11-05"), lastLogin: null, status: true, courses: [3] },
    { name: "Khushi Joshi", cohort: "AY 2024-25", dateJoined: new Date("2024-11-06"), lastLogin: new Date("2024-11-13"), status: true, courses: [4] },
    { name: "Mansi Patel", cohort: "AY 2024-25", dateJoined: new Date("2024-11-07"), lastLogin: null, status: false, courses: [1, 2, 5] },
    { name: "Nita Shah", cohort: "AY 2024-25", dateJoined: new Date("2024-11-08"), lastLogin: new Date("2024-11-10"), status: false, courses: [5] },
    { name: "Priyanshu Shrivastava", cohort: "AY 2024-25", dateJoined: new Date("2024-11-09"), lastLogin: new Date("2024-11-17"), status: true, courses: [1, 4, 5] },
  ];

  for (const student of students) {
    const { courses, ...studentData } = student;
    await prisma.student.create({
      data: {
        ...studentData,
        courses: {
          connect: courses.map((id) => ({ id })),
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
