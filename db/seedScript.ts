import prisma from "./db";

async function main() {
  // Dummy student data with class-specific courses and a class property
  const students = [
    {
      name: "Anshuman Kashyap",
      cohort: "AY 2024-25",
      dateJoined: new Date("2024-11-01"),
      lastLogin: new Date("2024-11-15"),
      status: true,
      class: "CBSE 9", // Added class property
      courses: ["CBSE 9 Science", "CBSE 9 Maths"], // Same class
    },
    {
      name: "Bansi Dadhaniya",
      cohort: "AY 2024-25",
      dateJoined: new Date("2024-11-02"),
      lastLogin: new Date("2024-11-16"),
      status: true,
      class: "CBSE 9", // Added class property
      courses: ["CBSE 9 Math", "CBSE 9 Science"], // Same class
    },
    {
      name: "Chandrika Valotia",
      cohort: "AY 2024-25",
      dateJoined: new Date("2024-11-03"),
      lastLogin: new Date("2024-11-14"),
      status: false,
      class: "CBSE 9", // Added class property
      courses: ["CBSE 9 Science", "CBSE 9 Social Studies"], // Same class
    },
    {
      name: "Devang Dave",
      cohort: "AY 2024-25",
      dateJoined: new Date("2024-11-01"),
      lastLogin: new Date("2024-11-17"),
      status: true,
      class: "CBSE 10", // Added class property
      courses: ["CBSE 10 Science", "CBSE 10 Maths"], // Same class
    },
    {
      name: "Forum Bhatt",
      cohort: "AY 2024-25",
      dateJoined: new Date("2024-11-04"),
      lastLogin: new Date("2024-11-15"),
      status: true,
      class: "CBSE 10", // Added class property
      courses: ["CBSE 10 English", "CBSE 10 Science"], // Same class
    },
    {
      name: "Hrithika Dattani",
      cohort: "AY 2024-25",
      dateJoined: new Date("2024-11-05"),
      lastLogin: null,
      status: true,
      class: "CBSE 9", // Added class property
      courses: ["CBSE 9 Maths", "CBSE 9 Science"], // Same class
    },
    {
      name: "Khushi Joshi",
      cohort: "AY 2024-25",
      dateJoined: new Date("2024-11-06"),
      lastLogin: new Date("2024-11-13"),
      status: true,
      class: "CBSE 10", // Added class property
      courses: ["CBSE 10 Science", "CBSE 10 Maths"], // Same class
    },
    {
      name: "Mansi Patel",
      cohort: "AY 2024-25",
      dateJoined: new Date("2024-11-07"),
      lastLogin: null,
      status: false,
      class: "CBSE 10", // Added class property
      courses: ["CBSE 10 Maths", "CBSE 10 Science"], // Same class
    },
    {
      name: "Nita Shah",
      cohort: "AY 2024-25",
      dateJoined: new Date("2024-11-08"),
      lastLogin: new Date("2024-11-10"),
      status: false,
      class: "CBSE 9", // Added class property
      courses: ["CBSE 9 Science", "CBSE 9 Maths"], // Same class
    },
    {
      name: "Priyanshu Shrivastava",
      cohort: "AY 2024-25",
      dateJoined: new Date("2024-11-09"),
      lastLogin: new Date("2024-11-17"),
      status: true,
      class: "CBSE 9", // Added class property
      courses: ["CBSE 9 Social Studies", "CBSE 9 Science"], // Same class
    },
  ];

  // Insert students into the database
  for (const student of students) {
    await prisma.student.create({
      data: student,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

