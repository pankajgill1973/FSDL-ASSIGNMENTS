# Smart Hospital Management System — System Architecture

---

## 1. Architecture Overview

The Smart Hospital Management System follows a **3-Tier MERN Stack Architecture**:

```
[ Client / Browser ]
        ↓  (HTTP/HTTPS)
[ Backend Server (Node.js + Express.js) ]
        ↓  (Mongoose ODM)
[ Database (MongoDB Atlas) ]
```

All static assets and file uploads are served/stored via **AWS S3**, and the entire application is hosted on **AWS (EC2 / Elastic Beanstalk)**.

---

## 2. Technology Stack

| Layer          | Technology              | Purpose                              |
|----------------|-------------------------|--------------------------------------|
| Frontend       | React.js                | User Interface                       |
| Backend        | Node.js + Express.js    | REST API & Business Logic            |
| Database       | MongoDB Atlas           | Data Storage                         |
| File Storage   | Amazon S3               | Prescription & Document Uploads      |
| Cloud Platform | Amazon Web Services     | Hosting & Deployment                 |
| Auth           | JWT (JSON Web Tokens)   | Secure Authentication                |
| Design         | Figma                   | UI/UX Prototyping                    |

---

## 3. Component Architecture

### 3.1 Frontend (React.js)

```
src/
├── components/
│   ├── Auth/           # Login, Register
│   ├── Patient/        # Patient Dashboard, Records
│   ├── Doctor/         # Doctor Dashboard, Schedule
│   ├── Admin/          # Admin Panel, Reports
│   └── Shared/         # Navbar, Footer, Loader
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Appointments.jsx
│   └── MedicalRecords.jsx
├── services/           # Axios API calls
├── context/            # Auth Context (Role-based)
└── App.jsx
```

### 3.2 Backend (Node.js + Express.js)

```
server/
├── controllers/
│   ├── authController.js
│   ├── patientController.js
│   ├── doctorController.js
│   └── appointmentController.js
├── models/
│   ├── Patient.js
│   ├── Doctor.js
│   ├── Appointment.js
│   └── User.js
├── routes/
│   ├── auth.js
│   ├── patients.js
│   ├── doctors.js
│   └── appointments.js
├── middleware/
│   ├── authMiddleware.js    # JWT verification
│   └── roleMiddleware.js    # Role-based access
├── config/
│   └── db.js               # MongoDB connection
└── server.js
```

---

## 4. Request Flow

```
User Action (Browser)
      ↓
React Component
      ↓
Axios HTTP Request
      ↓
Express.js Router
      ↓
Auth Middleware (JWT Check)
      ↓
Role Middleware (Permission Check)
      ↓
Controller (Business Logic)
      ↓
Mongoose Model (DB Query)
      ↓
MongoDB Atlas
      ↓
Response → Controller → Client
```

---

## 5. Authentication Flow

```
1. User submits login credentials
2. Backend verifies credentials (bcrypt password check)
3. JWT token generated with user role payload
4. Token stored in client (localStorage / httpOnly cookie)
5. Every subsequent API request includes token in header
6. Middleware validates token and extracts role
7. Role middleware allows/denies access to protected routes
```

---

## 6. Role-Based Access Control (RBAC)

| Route/Feature           | Patient | Doctor | Admin |
|-------------------------|---------|--------|-------|
| Book Appointment        | ✅      | ❌     | ✅    |
| View Own Records        | ✅      | ❌     | ✅    |
| Update Diagnosis        | ❌      | ✅     | ✅    |
| Manage Doctor Profiles  | ❌      | ❌     | ✅    |
| View All Appointments   | ❌      | ✅     | ✅    |
| Generate Reports        | ❌      | ❌     | ✅    |

---

## 7. Cloud Architecture (AWS)

```
[ Users ]
    ↓
[ Route 53 (DNS) ]
    ↓
[ EC2 / Elastic Beanstalk ] ← Node.js App
    ↓                  ↘
[ MongoDB Atlas ]    [ S3 Bucket ]
  (Database)         (File Storage)
```

- **EC2 / Elastic Beanstalk** — Hosts the Node.js backend
- **MongoDB Atlas** — Managed cloud MongoDB database
- **Amazon S3** — Stores uploaded prescriptions and documents
- **Route 53** *(optional)* — Domain and DNS management

---

## 8. Security Architecture

| Layer        | Security Measure                              |
|--------------|-----------------------------------------------|
| Transport    | HTTPS / TLS encryption                        |
| Auth         | JWT tokens with expiry                        |
| Passwords    | Bcrypt hashing (salt rounds ≥ 10)             |
| API          | Input validation & sanitization               |
| Access       | Role-based middleware on all protected routes |
| File Upload  | Validated file types, stored on S3            |

---

## 9. Scalability Considerations

- MongoDB Atlas supports horizontal scaling with sharding
- Node.js is non-blocking and handles concurrent requests efficiently
- AWS auto-scaling groups can be configured for traffic spikes
- Stateless JWT auth allows multiple server instances

---

*Document Version: 1.0 | Status: Draft*
