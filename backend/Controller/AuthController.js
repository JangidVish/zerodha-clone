const User = require("../modal/UserModal");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../utils/SecretToken");

const Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      sameSite: "None",
    });
    res.status(201).json({
      message: "User Signed Successfully",
      success: true,
      id: user._id,
    });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Server Error ${error}`, error });
  }
};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: "Incorrect  email",
      });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({
        message: "Incorrect password",
      });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      sameSite: "None",
    });

    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      id: user._id,
    });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Server Error ${error}`, error });
  }
};

module.exports = { Signup, Login };
