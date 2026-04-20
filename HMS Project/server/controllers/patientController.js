const Patient = require('../models/Patient');

// @desc    Add patient profile
// @route   POST /api/patients
// @access  Private (Patient, Admin)
const addPatientProfile = async (req, res) => {
  try {
    const { name, age, gender, contact, address, blood_group } = req.body;
    
    let patient = await Patient.findOne({ user_id: req.user._id });
    if (patient) {
      return res.status(400).json({ message: 'Patient profile already exists' });
    }

    patient = await Patient.create({
      user_id: req.user._id,
      name,
      age,
      gender,
      contact,
      address,
      blood_group
    });

    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get patient profile by user ID or patient ID
// @route   GET /api/patients/:id
// @access  Private
const getPatientProfile = async (req, res) => {
  try {
    // Try to find by direct patient ID or by associated user ID
    let patient = await Patient.findById(req.params.id);
    if (!patient) {
      patient = await Patient.findOne({ user_id: req.params.id });
    }

    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update patient profile
// @route   PUT /api/patients/:id
// @access  Private
const updatePatientProfile = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);

    if (patient) {
      // Allow only the owner or an admin
      if (patient.user_id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
         return res.status(403).json({ message: 'Not authorized to update this profile' });
      }

      patient.name = req.body.name || patient.name;
      patient.age = req.body.age || patient.age;
      patient.gender = req.body.gender || patient.gender;
      patient.contact = req.body.contact || patient.contact;
      patient.address = req.body.address || patient.address;
      patient.blood_group = req.body.blood_group || patient.blood_group;

      const updatedPatient = await patient.save();
      res.json(updatedPatient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addPatientProfile,
  getPatientProfile,
  updatePatientProfile
};
