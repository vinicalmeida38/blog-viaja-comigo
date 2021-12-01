const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const allowedRoutes = ["/guides", "/comment"];

  if (allowedRoutes) {
    return next();
  }

  if (!authHeader) {
    return res.send(401).send({ error: "The token must be provided" });
  }

  const parts = authHeader.split(" ");

  if (!parts.length === 2) {
    return res.status(401).send({ error: "Token format invalid" });
  }

  const [scheme, token] = parts;

  if (scheme !== "Bearer") {
    return res.status(401).send({ error: "The token must have the Bearer" });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: "Token invalid" });
    }

    req.userId = decoded.id;
    return next();
  });
};
