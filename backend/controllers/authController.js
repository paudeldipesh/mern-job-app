import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { hashedPassword } from "../utils/passwordUtils.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const getHashedPassword = await hashedPassword(req.body.password);
  req.body.password = getHashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "user created" });
};

export const login = async (req, res) => {
  res.send("login");
};
