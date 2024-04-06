const testPostController = (req, res) => {
  console.log("hello");
  const { name } = req.body;
  res.status(200).send(`your name is ${name}`);
};

export default testPostController;
