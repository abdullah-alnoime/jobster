require("dotenv").config();
const express = require("express");
const app = express();
const auth = require("./routes/auth");
const notFound = require("./middlewares/not-found");
const handleError = require("./middlewares/handle-error");
const connect = require("./db/connect");

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/auth", auth);
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
