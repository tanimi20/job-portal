import userModel from "../models/userModel.js";

export const authRegister = async (req, res, next) => {
  console.log("hi");

  const { name, email, password } = req.body;
  if (!name) {
    next("name is required");
  }
  if (!email) {
    next("please provide the email");
  }
  if (!password) {
    next("please provide the password");
  }
  //validation is that user exists or not
  // const existinguser = await userModel.findOne({ email });
  // if (existinguser) {
  //   return res.status(200).send({ success: false, message: "email register" });
  // }
  const user = await userModel.create({ name, email, password });
  //token

  const token = user.createJWT();
  res.status(201).send({
    succes: true,
    message: "user created",
    user: {
      name: user.name,
      email: user.email,
      password: user.password,
      location: user.location,
    },

    token,
  });
};

export const authLoginUser = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    next("please provide correct the field");
  }
  const user = await userModel.findOne({ email });
  if (!user) {
    next("user not found");
  }
  const isMatch = await user.comparepassword(password);
  if (!isMatch) {
    next("invalid name and password");
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Login successful",
    user,
    token,
  });
};
