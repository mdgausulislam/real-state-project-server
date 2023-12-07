const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  // Check if password is provided and not empty
  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }

  // Generate hash with bcrypt
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ userName, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
