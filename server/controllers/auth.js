import User from "../models/User.js";
import bcrypt from "bcryptjs";
export const registerUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(11);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).send("user has been created");
  } catch (err) {
    next(err);
  }
};

