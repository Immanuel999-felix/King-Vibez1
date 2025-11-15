const express = require('express');
const router = express.Router();
const { requestOtp, verifyOtp } = require('../controllers/authController');

router.post('/request-otp', requestOtp);
router.post('/verify-otp', verifyOtp);
router.post("/send-otp", sendOtp);

module.exports = router;
