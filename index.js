require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(`Error connecting to DB ${err}`);
  });

const Project = require("./models/project");
const sendMessageRoute = require("./routes/sendMessageRoute.js");
const projectRoute = require("./routes/projectRoute.js");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://robera-abera.onrende.com"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcom to Home route");
});
app.use("/", sendMessageRoute);
app.use("/", projectRoute);

app.listen(process.env.PORT || 3003, () => {
  console.log("Server starte on port " + process.env.PORT);
});
