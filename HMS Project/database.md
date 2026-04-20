# Smart Hospital Management System — Database Design

---

## 1. Overview

- **Database:** MongoDB (NoSQL Document Store)
- **Hosting:** MongoDB Atlas (Cloud)
- **ODM:** Mongoose (Node.js)
- **Design Pattern:** Embedded documents for tightly coupled data; References (ObjectId) for loosely coupled relationships

---

## 2. Collections

### 2.1 Users

Stores authentication credentials for all roles.

```json
{
  "_id": "ObjectId",
  "name": "String",
  "email": "String (unique)",
  "password": "String (hashed)",
  "role": "String (enum: patient | doctor | admin)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

---

### 2.2 Patients

Stores patient profile and medical history.

```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId (ref: Users)",
  "name": "String",
  "age": "Number",
  "gender": "String (enum: Male | Female | Other)",
  "contact": "String",
  "address": "String",
  "blood_group": "String",
  "medical_history": [
    {
      "condition": "String",
      "diagnosed_on": "Date",
      "notes": "String"
    }
  ],
  "prescriptions": [
    {
      "file_url": "String (S3 URL)",
      "uploaded_on": "Date",
      "doctor_id": "ObjectId (ref: Doctors)"
    }
  ],
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

---

### 2.3 Doctors

Stores doctor profiles, specializations, and availability.

```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId (ref: Users)",
  "name": "String",
  "specialization": "String",
  "qualification": "String",
  "contact": "String",
  "availability": [
    {
      "day": "String (enum: Mon | Tue | Wed | Thu | Fri | Sat | Sun)",
      "start_time": "String",
      "end_time": "String"
    }
  ],
  "is_active": "Boolean",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

---

### 2.4 Appointments

Tracks all appointment bookings between patients and doctors.

```json
{
  "_id": "ObjectId",
  "patient_id": "ObjectId (ref: Patients)",
  "doctor_id": "ObjectId (ref: Doctors)",
  "appointment_date": "Date",
  "time_slot": "String",
  "status": "String (enum: pending | confirmed | cancelled | completed)",
  "reason": "String",
  "notes": "String",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

---

### 2.5 MedicalRecords

Stores diagnosis and treatment details per appointment.

```json
{
  "_id": "ObjectId",
  "appointment_id": "ObjectId (ref: Appointments)",
  "patient_id": "ObjectId (ref: Patients)",
  "doctor_id": "ObjectId (ref: Doctors)",
  "diagnosis": "String",
  "treatment": "String",
  "medicines": [
    {
      "name": "String",
      "dosage": "String",
      "duration": "String"
    }
  ],
  "notes": "String",
  "createdAt": "Date"
}
```

---

### 2.6 Billing *(Optional Module)*

```json
{
  "_id": "ObjectId",
  "patient_id": "ObjectId (ref: Patients)",
  "appointment_id": "ObjectId (ref: Appointments)",
  "amount": "Number",
  "status": "String (enum: paid | pending | cancelled)",
  "payment_date": "Date",
  "createdAt": "Date"
}
```

---

## 3. Relationships Diagram

```
Users
  ├── (1:1) → Patients
  └── (1:1) → Doctors

Patients
  └── (1:N) → Appointments

Doctors
  └── (1:N) → Appointments

Appointments
  ├── (1:1) → MedicalRecords
  └── (1:1) → Billing
```

---

## 4. Indexes

| Collection   | Field          | Index Type | Reason                          |
|--------------|----------------|------------|---------------------------------|
| Users        | email          | Unique     | Prevent duplicate accounts      |
| Patients     | user_id        | Single     | Fast patient lookup by user     |
| Doctors      | specialization | Single     | Filter doctors by specialty     |
| Appointments | patient_id     | Single     | Fetch appointments by patient   |
| Appointments | doctor_id      | Single     | Fetch appointments by doctor    |
| Appointments | appointment_date | Single   | Sort/filter by date             |

---

## 5. Data Validation Rules

| Field          | Rule                                           |
|----------------|------------------------------------------------|
| email          | Must be valid email format, unique             |
| password       | Minimum 8 characters, hashed with bcrypt       |
| role           | Must be one of: patient, doctor, admin         |
| gender         | Must be one of: Male, Female, Other            |
| status         | Must match defined enum values per collection  |
| appointment_date | Must be a future date                        |
| contact        | 10-digit numeric string                        |

---

## 6. Sample Mongoose Schema (Appointments)

```javascript
const appointmentSchema = new mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  appointment_date: {
    type: Date,
    required: true
  },
  time_slot: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  reason: String,
  notes: String
}, { timestamps: true });
```

---

*Document Version: 1.0 | Status: Draft*
