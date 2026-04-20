const MedicalRecord = require('../models/MedicalRecord');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

// @desc    Add a medical record
// @route   POST /api/records
// @access  Private (Doctor)
const addMedicalRecord = async (req, res) => {
  try {
    const { appointment_id, patient_id, diagnosis, treatment, medicines, notes } = req.body;

    let doctor = await Doctor.findOne({ user_id: req.user._id });
    if (!doctor && req.user.role === 'doctor') {
      doctor = await Doctor.create({ user_id: req.user._id, name: req.user.name || 'Doctor', specialization: 'General' });
    }
    if (!doctor) return res.status(404).json({ message: 'Doctor profile not found' });

    const record = await MedicalRecord.create({
      appointment_id,
      patient_id,
      doctor_id: doctor._id,
      diagnosis,
      treatment,
      medicines,
      notes
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get patient records
// @route   GET /api/records/patient/:id
// @access  Private (Patient, Doctor, Admin)
const getPatientRecords = async (req, res) => {
  try {
    const patient = await Patient.findOne({ user_id: req.params.id });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    const records = await MedicalRecord.find({ patient_id: patient._id })
      .populate('doctor_id', 'name specialization')
      .populate('appointment_id', 'appointment_date');

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get records generically
// @route   GET /api/records
// @access  Private
const getRecords = async (req, res) => {
  try {
    if (req.user.role === 'patient') {
      let patient = await Patient.findOne({ user_id: req.user._id });
      if (!patient) {
        patient = await Patient.create({ user_id: req.user._id, name: req.user.name || 'Patient' });
      }
      const records = await MedicalRecord.find({ patient_id: patient._id }).populate('doctor_id', 'name');
      res.json(records);
    } else if (req.user.role === 'doctor') {
      let doctor = await Doctor.findOne({ user_id: req.user._id });
      if (!doctor) {
        doctor = await Doctor.create({ user_id: req.user._id, name: req.user.name || 'Doctor', specialization: 'General' });
      }
      const records = await MedicalRecord.find({ doctor_id: doctor._id }).populate('patient_id', 'name').populate('doctor_id', 'name');
      res.json(records);
    } else {
      const records = await MedicalRecord.find().populate('patient_id', 'name').populate('doctor_id', 'name');
      res.json(records);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addMedicalRecord,
  getPatientRecords,
  getRecords
};
