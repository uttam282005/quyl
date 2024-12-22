# **Instinctive Studio Internship Assignment**

## **Overview**
This project implements a student management system that allows CRUD operations (Create, Read, Update, Delete) for managing students and their courses. It uses the following technologies:
- **React**: For frontend
- **Redux**: For state management
- **Tailwind**: For styling
- **Prisma**: For database ORM and schema management.
- **Supabse (PostgreSQL)**: As the database.
- **next.js**: For building the backend API and frontend.
- **TypeScript**: For type-safe development.

The system supports:
1. Managing student data (name, cohort, courses, etc.).
2. Managing CBSE courses (e.g., "CBSE 9 Science", "CBSE 10 Math").
3. APIs for inserting, updating, and retrieving student and course details.

---

## **Features**
- **Student Management**: 
  - Add new students with their courses and cohort details.
  - Update student details (name, cohort, courses, etc.).
  - Retrieve student records with detailed information.
  
- **Course Management**:
  - Add CBSE courses (e.g., "CBSE 9 Science").
  - Associate students with specific courses.

- **Database Integration**:
  - Data is stored in a PostgreSQL database using Prisma ORM.

---

## **Tech Stack**
- **Frontend**: React, Redux, Tailwind, Shadcn
- **Backend**: Next.js
- **Database**: PostgreSQL / Supabse
- **ORM**: Prisma
- **Language**: TypeScript

---

## **Getting Started**

### **1. Prerequisites**
Ensure you have the following installed:
- Node.js (v16 or later)
- PostgreSQL (v14 or later)
- Prisma CLI

### **2. Setup Instructions**
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Create a new PostgreSQL database.
   - Configure the connection string in the `.env` file:
     ```
     DATABASE_URL=postgresql://<username>:<password>@localhost:5432/<database-name>
     ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Seed the database:
   ```bash
   npm run seed
   ```

6. Start the server:
   ```bash
   npm run dev
   ```

7. Access the API:
   The server runs on `http://localhost:3000`.

---

## **API Endpoints**

### **1. Students**
- **Create Student**
  ```
  POST /api/students
  ```
  **Request Body**:
  ```json
  {
    "name": "John Doe",
    "cohort": "AY 2024-25",
    "courses": ["CBSE 9 Science", "CBSE 10 Maths"],
    "dateJoined": "2024-11-01",
    "lastLogin": "2024-11-15",
    "status": true
  }
  ```

- **Update Student**
  ```
  PUT /api/students/
  ```
  **Request Body**:

  ```json
  {
    "name": "John Doe",
    "cohort": "AY 2024-25",
    "courses": ["CBSE 9 Science", "CBSE 10 Maths"],
    "dateJoined": "2024-11-01",
    "lastLogin": "2024-11-15",
    "status": true
  }
  ```

- **Retrieve All Students**
  ```
  GET /api/students
  ```

## **Project Structure**
```
📂 db
 ┣ 📜 prisma/
 ┃ ┣ 📜 migrations/       # Prisma migrations folder
 ┃ ┗ 📜 schema.prisma     # Prisma schema
 ┣ 📜 seedScript.ts       # Script to seed initial data
📂 app                    # Main application folder
📂 public                 # Static files
📜 .env                   # Environment variables
📜 package.json           # Node.js dependencies
📜 README.md              # Project documentation
```

---

## **Development Workflow**
1. **Adding New Prisma Models**:
   - Modify the `schema.prisma` file.
   - Run the migration command:
     ```bash
     npx prisma migrate dev --name <migration-name>
     ```

2. **Testing APIs**:
   Use tools like Postman or CURL to test API endpoints.

3. **Seeding Data**:
   Modify the `db/seedScript.ts` file to add more sample data.

---

## **Future Improvements**
- Add authentication for secure access to APIs.
- Implement frontend for managing students and courses.
- Add pagination and filtering to API endpoints.

---

## **Contact**
If you have any questions, reach out at:  
**Uttam Raj**  
Email: **[uttam282005@gmail.com]**  
LinkedIn: **[https://www.linkedin.com/in/uttam-raj-050709269/]**

--- 

