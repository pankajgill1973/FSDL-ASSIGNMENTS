# Smart Hospital Management System

Welcome to the Smart Hospital Management System! This is a modern, web-based application designed to digitize and automate core hospital operations, including patient management, doctor scheduling, appointment booking, and medical records handling.

##  Features

The system is built with Role-Based Access Control (RBAC), offering dedicated interfaces for different users.

###  Patients (Users)
* Register & login securely.
* View available doctors and their specializations.
* Book, reschedule, and cancel appointments.
* View personal medical history and prescriptions.

###  Doctors
* Access a personalized dashboard.
* View and manage scheduled appointments.
* Update patient diagnoses and medical records.
* Manage availability.

###  Admins
* Comprehensive control over the hospital system.
* Manage doctors and patients.
* Oversee all appointments.
* Generate and view reports.

##  Technology Stack

This application is built using the **MERN** stack and designed for AWS cloud deployment:
* **Frontend:** React.js, Tailwind CSS (Vite)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Authentication:** JSON Web Tokens (JWT) & bcrypt
* **Deployment/Cloud (Planned):** Amazon Web Services (EC2, S3 for file storage, Route 53)

##  Project Structure

This is a Monorepo containing both the Frontend (Client) and Backend (Server).

```
📦 HMS Project
 ┣ 📂 client/           # React frontend built with Vite
 ┣ 📂 server/           # Node.js/Express backend API
 ┣ 📜 prd.md            # Product Requirements Document
 ┣ 📜 system_architecture.md  # Detailed system architecture
 ┣ 📜 database.md       # Database schemas & relationships
 ┣ 📜 todo.md           # Development checklist
 ┗ 📜 README.md         # This file
```

##  How to Run Locally

To get the project running on your local machine, follow these steps:

### Prerequisites
* You must have [Node.js](https://nodejs.org/) and npm installed.
* You need a MongoDB instance running (locally or MongoDB Atlas).

### 1. Setup Backend (Server)
1. Navigate to the server folder: `cd server`
2. Install dependencies: `npm install`
3. Create a `.env` file in the `server` root and add your configuration (e.g., `PORT`, `MONGO_URI`, `JWT_SECRET`).
4. Start the server: `npm start` (or `npm run dev` if you have nodemon setup).

### 2. Setup Frontend (Client)
1. Open a new terminal and navigate to the client folder: `cd client`
2. Install dependencies: `npm install`
3. Create a `.env` file (or use `.env.local`) if you need custom environment variables (e.g., your Backend API URL).
4. Start the Vite development server: `npm run dev`

### 3. Open in Browser
Visit `http://localhost:5173` (or the port specified by Vite) to view the application!

---

*Note: For security reasons, API keys, database URLs, and `node_modules` folders are intentionally omitted from this repository.*
