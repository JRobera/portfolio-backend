const getProjects = async (req, res) => {
  await Project.find({}).then((response) => {
    res.json(response);
  });
};

module.exports = { getProjects };
