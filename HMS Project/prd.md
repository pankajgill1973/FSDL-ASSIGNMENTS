# Smart Hospital Management System — Product Requirements Document (PRD)

---

## 1. Product Overview

**Product Name:** Smart Hospital Management System
**Type:** Web-based Application
**Stack:** MERN (MongoDB, Express.js, React, Node.js)
**Deployment:** Amazon Web Services (AWS)

### Purpose
The Smart Hospital Management System is designed to digitize and automate core hospital operations — including patient management, doctor scheduling, appointment booking, and medical records handling. It aims to reduce manual work, minimize human errors, and provide a seamless experience for patients, doctors, and administrators.

---

## 2. Objectives

- Provide an online platform for appointment booking
- Maintain digital patient records
- Enable doctors to manage appointments and update diagnoses
- Allow admins to monitor and control hospital operations
- Ensure efficient data storage and retrieval
- Reduce paperwork and human errors

---

## 3. Scope

### In Scope
- User authentication (Admin, Doctor, Patient)
- Appointment booking system
- Patient records management
- Doctor scheduling
- Admin control panel
- Reports generation

### Out of Scope *(Future Enhancements)*
- AI diagnosis system
- Real-time video consultation
- Integration with wearable devices

---

## 4. Stakeholders

| Stakeholder     | Role                                      |
|-----------------|-------------------------------------------|
| Patients        | Book appointments, view records           |
| Doctors         | Manage appointments, update diagnosis     |
| Admin           | Manage entire system                      |
| Hospital Staff  | Assist in operations                      |
| Developers      | Build and maintain system                 |

---

## 5. User Roles & Permissions

### 5.1 Patient
- Register / Login
- Book appointment
- View medical history
- View prescriptions

### 5.2 Doctor
- Login
- View appointments
- Update diagnosis
- Manage schedule

### 5.3 Admin
- Manage doctors
- Manage patients
- Manage appointments
- View reports

---

## 6. Functional Requirements

### 6.1 Authentication Module
- User registration
- Secure login / logout
- Role-based access control (RBAC)

### 6.2 Patient Management
- Add patient details
- Update patient profile
- View medical history
- Delete patient records

### 6.3 Doctor Management
- Add doctor
- Update doctor details
- View specialization
- Manage availability

### 6.4 Appointment System
- Book appointment
- Cancel appointment
- Reschedule appointment
- View appointment history

### 6.5 Medical Records
- Store diagnosis
- Upload prescriptions
- View patient history

### 6.6 Admin Dashboard
- Manage users
- Monitor system activity
- Generate reports

### 6.7 Additional Modules
- Pharmacy system
- Billing system
- Emergency contact

---

## 7. Non-Functional Requirements

| Category      | Requirement                                   |
|---------------|-----------------------------------------------|
| Performance   | Response time < 2 seconds                     |
| Security      | Encrypted passwords, secure APIs, RBAC        |
| Scalability   | Support multiple concurrent users             |
| Availability  | 99% uptime                                    |
| Usability     | Simple, intuitive, mobile-friendly UI         |

---

## 8. API Requirements

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| POST   | /login                | User login            |
| POST   | /register             | User registration     |
| GET    | /doctors              | Get all doctors       |
| POST   | /appointments         | Book appointment      |
| GET    | /appointments         | View appointments     |
| PUT    | /appointments/:id     | Update appointment    |
| DELETE | /appointments/:id     | Cancel appointment    |

---

## 9. UI/UX Requirements

- Clean and responsive design
- Easy navigation with dashboard-based layout
- Mobile-friendly UI
- Design Tool: Figma

---

## 10. Constraints

- Limited development time (academic project)
- Beginner-level implementation
- No advanced AI features in current version

---

## 11. Assumptions

- Users have stable internet access
- Basic JWT authentication is sufficient
- System is used within a hospital environment

---

## 12. Success Metrics

- Successful appointment booking rate
- User satisfaction score
- System uptime percentage
- Average response time

---

## 13. Future Enhancements

- Online video consultation
- AI-based diagnosis suggestions
- Mobile application (iOS & Android)
- Payment gateway integration
- Real-time notifications

---

*Document Version: 1.0 | Status: Draft*
