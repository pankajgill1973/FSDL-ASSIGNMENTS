const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

// @desc    Book an appointment
// @route   POST /api/appointments
// @access  Private (Patient, Admin)
const bookAppointment = async (req, res) => {
  try {
    const { doctor_id, appointment_date, time_slot, reason, notes } = req.body;

    // Get patient profile ID based on logged in user
    let patient = await Patient.findOne({ user_id: req.user._id });
    if (!patient && req.user.role === 'patient') {
      patient = await Patient.create({ user_id: req.user._id, name: req.user.name || 'Patient' });
    }
    if (!patient) return res.status(404).json({ message: 'Patient profile not found' });

    const appointment = await Appointment.create({
      patient_id: patient._id,
      doctor_id,
      appointment_date,
      time_slot,
      reason,
      notes
    });

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all appointments
// @route   GET /api/appointments
// @access  Private (Admin, Doctor)
const getAppointments = async (req, res) => {
  try {
    let appointments;
    
    if (req.user.role === 'admin') {
      appointments = await Appointment.find().populate('patient_id', 'name').populate('doctor_id', 'name');
    } else if (req.user.role === 'doctor') {
      let doctor = await Doctor.findOne({ user_id: req.user._id });
      if (!doctor) {
        doctor = await Doctor.create({ user_id: req.user._id, name: req.user.name || 'Doctor', specialization: 'General' });
      }
      appointments = await Appointment.find({ doctor_id: doctor._id }).populate('patient_id', 'name').populate('doctor_id', 'name');
    }

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get patient appointments
// @route   GET /api/appointments/patient/:id
// @access  Private
const getPatientAppointments = async (req, res) => {
  try {
    const patient = await Patient.findOne({ user_id: req.params.id });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    
    const appointments = await Appointment.find({ patient_id: patient._id }).populate('doctor_id', 'name');
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update appointment status/reschedule
// @route   PUT /api/appointments/:id
// @access  Private
const updateAppointment = async (req, res) => {
  try {
    const { status, appointment_date, time_slot } = req.body;
    const appointment = await Appointment.findById(req.params.id);

    if (appointment) {
      appointment.status = status || appointment.status;
      appointment.appointment_date = appointment_date || appointment.appointment_date;
      appointment.time_slot = time_slot || appointment.time_slot;

      const updatedAppointment = await appointment.save();
      res.json(updatedAppointment);
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete/Cancel appointment
// @route   DELETE /api/appointments/:id
// @access  Private
const cancelAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (appointment) {
      appointment.status = 'cancelled';
      await appointment.save();
      res.json({ message: 'Appointment cancelled' });
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  bookAppointment,
  getAppointments,
  getPatientAppointments,
  updateAppointment,
  cancelAppointment
};
