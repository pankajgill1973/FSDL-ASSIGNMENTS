const Doctor = require('../models/Doctor');
const User = require('../models/User');

// @desc    Add doctor profile
// @route   POST /api/doctors
// @access  Private (Admin)
const addDoctor = async (req, res) => {
  try {
    const { name, email, password, specialization, qualification, contact } = req.body;

    // First create the User for the doctor
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: 'doctor',
    });

    const doctor = await Doctor.create({
      user_id: user._id,
      name,
      specialization,
      qualification,
      contact,
      availability: [] // Can be updated later
    });

    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all doctors
// @route   GET /api/doctors
// @access  Public
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({ is_active: true }).populate('user_id', 'email');
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get doctor details by id
// @route   GET /api/doctors/:id
// @access  Public
const getDoctorById = async (req, res) => {
  try {
    let doctor = await Doctor.findById(req.params.id).populate('user_id', 'email');
    if (!doctor) {
       doctor = await Doctor.findOne({ user_id: req.params.id }).populate('user_id', 'email');
    }

    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ message: 'Doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addDoctor,
  getDoctors,
  getDoctorById
};
