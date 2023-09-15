import UserToken from "../models/UserToken.js";
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.AUTH_TOKEN_SECRET, async (err, user) => {
    if (err) {
      //Invalid token
      return res.sendStatus(403);
    } else {
      try {
        const userToken = await UserToken.findOne({ token: token });
        if (!userToken) {
          return res.sendStatus(403);
        }
      } catch (err) {
        return res.sendStatus(400);
      }
    }

    next();
  });
};

export default auth;
