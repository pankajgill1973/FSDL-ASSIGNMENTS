# Smart Hospital Management System — Project TODO

---

## Legend
- `[ ]` Not Started
- `[~]` In Progress
- `[x]` Completed

---

## Phase 1 — Project Setup

- [ ] Initialize GitHub repository
- [ ] Setup Node.js + Express backend project structure
- [ ] Setup React frontend project (Vite / CRA)
- [ ] Connect MongoDB Atlas database
- [ ] Configure environment variables (`.env`)
- [ ] Setup ESLint + Prettier for code formatting
- [ ] Install core dependencies (mongoose, bcrypt, jsonwebtoken, axios, react-router-dom)

---

## Phase 2 — Authentication Module

- [ ] Create `User` model (name, email, password, role)
- [ ] POST `/register` — User registration with bcrypt password hashing
- [ ] POST `/login` — Login with JWT token generation
- [ ] Auth middleware — JWT token verification
- [ ] Role middleware — Role-based route protection
- [ ] Frontend: Login page
- [ ] Frontend: Register page
- [ ] Frontend: Auth context (store user + role)
- [ ] Frontend: Protected routes based on role

---

## Phase 3 — Patient Module

- [ ] Create `Patient` model
- [ ] POST `/patients` — Add patient
- [ ] GET `/patients/:id` — View patient profile
- [ ] PUT `/patients/:id` — Update patient profile
- [ ] DELETE `/patients/:id` — Delete patient (Admin only)
- [ ] Frontend: Patient dashboard
- [ ] Frontend: View medical history page
- [ ] Frontend: View prescriptions page

---

## Phase 4 — Doctor Module

- [ ] Create `Doctor` model
- [ ] POST `/doctors` — Add doctor (Admin only)
- [ ] GET `/doctors` — List all doctors
- [ ] GET `/doctors/:id` — Get doctor details
- [ ] PUT `/doctors/:id` — Update doctor details
- [ ] DELETE `/doctors/:id` — Remove doctor (Admin only)
- [ ] Frontend: Doctor dashboard
- [ ] Frontend: Doctor availability management
- [ ] Frontend: View assigned appointments

---

## Phase 5 — Appointment Module

- [ ] Create `Appointment` model
- [ ] POST `/appointments` — Book appointment
- [ ] GET `/appointments` — View all appointments (Admin/Doctor)
- [ ] GET `/appointments/patient/:id` — View patient's appointments
- [ ] PUT `/appointments/:id` — Reschedule / update appointment
- [ ] DELETE `/appointments/:id` — Cancel appointment
- [ ] Frontend: Book appointment form
- [ ] Frontend: Appointment list view
- [ ] Frontend: Reschedule / cancel actions

---

## Phase 6 — Medical Records Module

- [ ] Create `MedicalRecord` model
- [ ] POST `/records` — Add diagnosis/record (Doctor only)
- [ ] GET `/records/patient/:id` — View all records for a patient
- [ ] PUT `/records/:id` — Update record
- [ ] File upload: Prescription upload to AWS S3
- [ ] Frontend: Medical record form for doctors
- [ ] Frontend: Medical history view for patients

---

## Phase 7 — Admin Dashboard

- [ ] GET `/admin/stats` — Total patients, doctors, appointments
- [ ] User management — view, activate/deactivate users
- [ ] Generate reports (appointments, activity)
- [ ] Frontend: Admin panel layout
- [ ] Frontend: Stats overview cards
- [ ] Frontend: User management table
- [ ] Frontend: Reports page

---

## Phase 8 — UI/UX

- [ ] Design wireframes in Figma
- [ ] Implement responsive layout (mobile-friendly)
- [ ] Dashboard layout for all 3 roles
- [ ] Navigation bar with role-aware links
- [ ] Loading states and error messages
- [ ] Form validations on frontend

---

## Phase 9 — Testing

- [ ] Unit test: Auth routes
- [ ] Unit test: Appointment routes
- [ ] Unit test: Patient & Doctor routes
- [ ] Integration testing of full appointment flow
- [ ] Test role-based access control
- [ ] Test file upload to S3

---

## Phase 10 — Deployment

- [ ] Setup AWS EC2 instance / Elastic Beanstalk
- [ ] Configure environment variables on server
- [ ] Deploy backend to AWS
- [ ] Deploy frontend (AWS S3 Static Hosting / Vercel / Netlify)
- [ ] Connect MongoDB Atlas to production
- [ ] Configure HTTPS / SSL
- [ ] Final smoke testing on production

---

## Phase 11 — Documentation

- [x] PRD (`prd.md`)
- [x] System Architecture (`system_architecture.md`)
- [x] Database Design (`database.md`)
- [x] TODO (`todo.md`)
- [ ] API documentation (Postman collection or Swagger)
- [ ] README.md with setup instructions
- [ ] UML diagrams (Use Case, Class, Sequence)

---

## Optional / Future Enhancements

- [ ] Online video consultation
- [ ] AI-based diagnosis suggestions
- [ ] Mobile application (React Native)
- [ ] Payment gateway integration
- [ ] Real-time notifications (Socket.io)
- [ ] Pharmacy module
- [ ] Billing module

---

*Last Updated: March 2026*
