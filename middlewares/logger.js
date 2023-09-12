const logger = (req, res, next) => {
  console.log("log middleware");
  next();
};

export default logger;
