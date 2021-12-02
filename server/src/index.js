const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./controllers/authController")(app);
require("./controllers/guide")(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
