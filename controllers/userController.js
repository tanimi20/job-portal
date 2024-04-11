import userModel from "../models/userModel.js";

export const updateUser = async (req, res, next) => {
  const { name, email, lastname, loaction } = req.body;

  if (!name || !email || !lastname || !location) {
    next("please provide all field");
  }
  const user = await userModel.findOne({ _id: req.user.userId });
  user.name = name;
  user.lastname = lastname;
  user.location = location;

  await user.save();
  const token = user.createJWT();
  res.status(200).json({
    user,
    token,
  });
};
