const express = require("express");
const app = express();
const { auth, jobs } = require("./routes");
const { notFound, handleError, authorization } = require("./middlewares");
const connect = require("./db/connect");
const cros = require("cros");
require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cros());
app.use(express.static("./public"));
app.use("/api/v1/auth", auth);
app.use("/api/v1/jobs", authorization, jobs);
app.use(notFound);
app.use(handleError);

const runServer = async () => {
  try {
    await connect(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("Error:", err);
  }
};
runServer();
