const User = require('../models/User');
const jwt = require('jsonwebtoken');
const otpService = require('../utils/otpService');

const createToken = (user) => {
  return jwt.sign(
    { id: user._id, phone: user.phone, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

exports.requestOtp = async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.json({ error: "Phone required" });

  let user = await User.findOne({ phone });
  if (!user) user = await User.create({ phone });

  const { code, expiresAt } = await otpService.generateAndSendOtp(phone);
  user.otp = { code, expiresAt };
  await user.save();

  res.json({ ok: true, message: "OTP sent", debug: process.env.OTP_DEBUG === "true" ? code : undefined });
};

exports.verifyOtp = async (req, res) => {
  const { phone, code } = req.body;

  const user = await User.findOne({ phone });
  if (!user || !user.otp) return res.json({ error: "OTP not found" });

  if (user.otp.code !== code) return res.json({ error: "Invalid code" });
  if (new Date() > new Date(user.otp.expiresAt)) return res.json({ error: "OTP expired" });

  user.otp = undefined;
  await user.save();

  const token = createToken(user);

  res.json({ ok: true, token, user });
};
