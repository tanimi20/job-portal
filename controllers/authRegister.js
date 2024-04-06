import userModel from "../models/userModel.js";

const authRegister = async (req, res, next) => {
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
  const existinguser = await userModel.findOne({ email });
  if (existinguser) {
    return res.status(200).send({ success: false, message: "email register" });
  }
  const user = await userModel.create({ name, email, password });
  res.status(201).send({
    succes: true,
    message: "user created",
    user,
  });
};

export default authRegister;
