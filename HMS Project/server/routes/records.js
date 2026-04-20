const express = require('express');
const { addMedicalRecord, getPatientRecords, getRecords } = require('../controllers/recordController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, authorize('doctor'), addMedicalRecord)
  .get(protect, getRecords);

router.get('/patient/:id', protect, getPatientRecords);

module.exports = router;
