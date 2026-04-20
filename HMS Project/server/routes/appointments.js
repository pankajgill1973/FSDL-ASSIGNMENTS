const express = require('express');
const { bookAppointment, getAppointments, getPatientAppointments, updateAppointment, cancelAppointment } = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, authorize('patient', 'admin'), bookAppointment)
  .get(protect, authorize('admin', 'doctor'), getAppointments);

router.get('/patient/:id', protect, authorize('patient', 'admin'), getPatientAppointments);

router.route('/:id')
  .put(protect, authorize('patient', 'doctor', 'admin'), updateAppointment)
  .delete(protect, authorize('patient', 'admin'), cancelAppointment);

module.exports = router;
