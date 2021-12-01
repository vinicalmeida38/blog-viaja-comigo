const express = require("express");
const Guide = require("../models/guide");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();

router.use(authMiddleware);

router.post("/guide", async (req, res) => {
  try {
    const guide = await Guide.create(req.body);
    return res.send({ guide });
  } catch (err) {
    return res.status(400).send({ error: "Error on adding guide" });
  }
});

router.post("/comment/:guideId", async (req, res) => {
  const { name, comment } = req.body;

  try {
    const guide = await Guide.findByIdAndUpdate(
      req.params.guideId,
      {
        $push: { comments: [{ name: name, comment: comment }] },
      },
      { new: true }
    );
    return res.send(guide);
  } catch (err) {
    return res.status(400).send({ error: "Error on adding comment" });
  }
});

router.get("/guides", async (req, res) => {
  try {
    const guides = await Guide.find({});
    return res.send({ guides });
  } catch (err) {
    return res.status(400).send({ error: "Error on adding guide" });
  }
});

router.delete("/guide/:guideId", async (req, res) => {
  try {
    const guide = await Guide.findOneAndDelete(req.params.guideId);
    return res.send(guide);
  } catch (err) {
    return res.status(400).send({ error: "Error on deleting guide" });
  }
});

router.patch("/guide/:guideId", async (req, res) => {
  const { title, author, publicationDate, imageUrl, text } = req.body;

  try {
    const guide = await Guide.findByIdAndUpdate(
      req.params.guideId,
      {
        title,
        author,
        publicationDate,
        imageUrl,
        text,
      },
      { new: true }
    );
    return res.send(guide);
  } catch (err) {
    return res.status(400).send({ error: "Error on updating guide" });
  }
});

module.exports = (app) => app.use("/api", router);
