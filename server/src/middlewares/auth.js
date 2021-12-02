const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const requestPath = req.path;

  if (!requestPath.includes("admin")) {
    return next();
  }

  if (!authHeader) {
    return res.status(401).send({ error: "The token must be provided" });
  }

  const parts = authHeader.split(" ");

  if (!parts.length === 2) {
    return res.status(401).send({ error: "Invalid token format" });
  }

  const [scheme, token] = parts;

  if (scheme !== "Bearer") {
    return res.status(401).send({ error: "The token must have the Bearer" });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: "Invalid token" });
    }

    req.userId = decoded.id;
    return next();
  });
};
