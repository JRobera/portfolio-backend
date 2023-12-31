const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  livelink: { type: String, required: true },
  github: { type: String, required: true },
});

module.exports = Project = mongoose.model("projects", ProjectSchema);
