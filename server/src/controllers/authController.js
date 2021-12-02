const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

router.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: "User already registered" });
    }
    const user = await User.create(req.body);
    user.password = undefined;

    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed" });
  }
});

router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).send({ error: "User not found" });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).send({ error: "Wrong password" });
  }

  user.password = undefined;

  const token = jwt.sign({ id: user.id }, authConfig.secret, {
    expiresIn: 86400,
  });

  res.send({ user, token });
});

router.get("/verify/:token", async (req, res) => {
  const token = req.params.token;
  jwt.verify(token, authConfig.secret, (err, verifiedJwt) => {
    return err ? res.status(400).send(err.message) : res.send(verifiedJwt);
  });
});

module.exports = (app) => app.use("/auth", router);
