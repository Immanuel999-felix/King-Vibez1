const User = require("../models/User");
const { sendOTP } = require("../utils/otpService");

exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "Email required" });

    const otp = Math.floor(100000 + Math.random() * 900000);

    await sendOTP(email, otp);

    return res.json({ message: "OTP sent to email", otp }); // keep otp in debug mode
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
