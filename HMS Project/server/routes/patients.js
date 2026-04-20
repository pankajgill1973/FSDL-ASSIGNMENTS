const express = require('express');
const { addPatientProfile, getPatientProfile, updatePatientProfile } = require('../controllers/patientController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/', protect, authorize('patient', 'admin'), addPatientProfile);
router.get('/:id', protect, getPatientProfile);
router.put('/:id', protect, updatePatientProfile);

module.exports = router;
