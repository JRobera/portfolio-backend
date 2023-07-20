const express = require("express");
const router = express.Router();

const { sendMessage } = require("../controller/sendMessageController");

router.post("/api/send-message", sendMessage);

module.exports = router;
