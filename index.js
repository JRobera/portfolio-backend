require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sendMessageRoute = require("./routes/sendMessageRoute.js");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
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

app.listen(process.env.PORT || 3003, () => {
  console.log("Server starte on port " + process.env.PORT);
});
