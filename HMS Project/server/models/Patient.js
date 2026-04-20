const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
    contact: {
      type: String,
    },
    address: {
      type: String,
    },
    blood_group: {
      type: String,
    },
    medical_history: [
      {
        condition: String,
        diagnosed_on: Date,
        notes: String,
      },
    ],
    prescriptions: [
      {
        file_url: String,
        uploaded_on: Date,
        doctor_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Doctor',
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
