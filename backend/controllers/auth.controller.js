import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email and password are all required." });
    } else if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters long." });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ fullName, email, password: hashedPassword });
    if (newUser) {
        // generate jwt
    }
    else {
        return res.status(400).json({ message: "Invalid user data."})
    }
  } catch (error) {}
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};
