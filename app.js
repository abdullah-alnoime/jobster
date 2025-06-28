const express = require("express");
const app = express();
const { auth, jobs } = require("./routes");
const { notFound, handleError, authorization } = require("./middlewares");
const connect = require("./db/connect");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(limiter);
app.use(express.json());
app.use(cors());
app.use(helmet());
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
