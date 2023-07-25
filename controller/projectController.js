const getProjects = async (req, res) => {
  await Project.find({}).then((response) => {
    res
      .set("Access-Control-Allow-Origin", "https://robera-abera.onrender.com")
      .json(response);
  });
};

module.exports = { getProjects };
