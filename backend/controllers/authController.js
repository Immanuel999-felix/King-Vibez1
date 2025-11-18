const User = require("../models/User");
const { sendOTP } = require("../utils/otpService");

exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "Email required" });

    // Check if email exists in database
    let user = await User.findOne({ email });

    // If user does not exist or not admin → block
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "You are not authorized" });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP and expiry (5 mins)
    user.otp = otp;
    user.otpExpires = Date.now() + 5 * 60 * 1000;
    await user.save();

    // Send email OTP
    await sendOTP(email, otp);

    return res.json({ message: "OTP sent to email" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
