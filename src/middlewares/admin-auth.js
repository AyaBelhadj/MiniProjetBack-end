const jwt = require("jsonwebtoken");
//const _ = require('lodash');//used whn we need some speecifc attributes of the token just to rapidly decode specific parts of the token

// role : verify if user is authenticated or not with the jwt token provided by the user in the http request header

function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .send({ message: "No token, authorization denied" });
        console.log(res)
    }
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .send({ message: "Session expired, authorization denied" });
      }
      req.user = decoded;
      if (!req.user.role || req.user.role !== "admin")
        return res
          .status(401)
          .send({ message: "Authorization denied,must be admin" });
      return next();
    });
  } catch (err) {
    return res.status(401).send({ message: "Invalid token" });
  }
}

module.exports = verifyToken;
