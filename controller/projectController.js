const getProjects = (req, res) => {
  Project.find({}).then((response) => {
    res.json(response);
  });
};

module.exports = { getProjects };
