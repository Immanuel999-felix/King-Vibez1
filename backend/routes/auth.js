const express = require('express');
const router = express.Router();
// 👇 FIX: Change 'requestOtp' to 'sendOtp' to match your controller export
const { sendOtp, verifyOtp } = require('../controllers/authController');

// FIX: Use 'sendOtp' as the callback function
router.post('/request-otp', sendOtp); 
router.post('/verify-otp', verifyOtp);
// OPTIONAL: Remove the redundant route if you only need one '/request-otp'
// router.post("/send-otp", sendOtp); 

module.exports = router;
