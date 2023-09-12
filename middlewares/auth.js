const auth = (req, res, next) => {
  let authenticated = true;

  if (authenticated) {
    next();
  }
};

export default auth;
