const middelwares = (err, req, res, next) => {
  console.log(err);
  const defaulterr = {
    statuscode: 500,
    message: err,
  };
  if (err.name === "validationError") {
    defaulterr.statuscode = 400;
    defaulterr.message = Object.values(err.error)
      .map((item) => item.message)
      .join(",");
  }

  // duplicate key
  if (err.code && err.code == 11000) {
    defaulterr.statuscode = 400;
    defaulterr.message = `${Object.keys(err.keyValue)} field has to be unique`;
  }
  res.status(defaulterr.statuscode).json({ message: defaulterr.message });
};
export default middelwares;
