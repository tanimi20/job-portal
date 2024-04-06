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

  res.status(defaulterr.statuscode).json({ message: defaulterr.message });
};
export default middelwares;
