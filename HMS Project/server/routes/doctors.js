const express = require('express');
const { addDoctor, getDoctors, getDoctorById } = require('../controllers/doctorController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, authorize('admin'), addDoctor)
  .get(getDoctors);

router.route('/:id')
  .get(getDoctorById);

module.exports = router;
