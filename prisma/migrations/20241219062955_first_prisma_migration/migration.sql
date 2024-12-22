-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cohort" TEXT NOT NULL,
    "courses" TEXT[],
    "dateJoined" TIMESTAMP(3) NOT NULL,
    "lastLogin" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
