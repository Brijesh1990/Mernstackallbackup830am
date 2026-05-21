const User = require("../models/User");
const bcrypt = require("bcryptjs");
const RefreshToken = require("../models/RefreshToken");

const {
  generateAccessToken,
  generateRefreshToken
} = require("../utils/generateToken");


// REGISTER
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hash
  });

  res.json(user);
};


// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ msg: "User not found" });

  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.status(400).json({ msg: "Wrong password" });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  await RefreshToken.create({
    token: refreshToken,
    userId: user._id
  });

  res.json({
    accessToken,
    refreshToken
  });
};


// REFRESH TOKEN
exports.refresh = async (req, res) => {
  const { token } = req.body;

  const exists = await RefreshToken.findOne({ token });

  if (!exists) return res.status(403).json({ msg: "Invalid refresh token" });

  const jwt = require("jsonwebtoken");

  jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    const accessToken = require("../utils/generateToken")
      .generateAccessToken({ _id: user.id, role: "user" });

    res.json({ accessToken });
  });
};


// LOGOUT
exports.logout = async (req, res) => {
  await RefreshToken.deleteOne({ token: req.body.token });

  res.json({ msg: "Logged out" });
};