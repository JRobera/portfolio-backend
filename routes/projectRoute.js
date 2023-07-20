const express = require("express");
const router = express.Router();

const { getProjects } = require("../controller/projectController");

router.get("/api/get-projects", getProjects);

module.exports = router;
