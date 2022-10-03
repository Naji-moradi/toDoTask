const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dataRout = require("./routes/data");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/posts", dataRout);

app.listen("5000", () => {
  console.log("Backend is running.");
});
