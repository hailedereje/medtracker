import User from "../models/User.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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
export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return next(handleError({ status: 404, message: "user not found" }));
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect)
      return next(
        handleError({ status: 400, message: "Incorrect email or password!" })
      );
    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...noPassword } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(noPassword);
  } catch (err) {
    next(err);
  }
};
