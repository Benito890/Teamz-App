const { createOne, getAll} = require('../models/user');

const handlePost = async (req, res) => {
  const data = await createOne(req.body);
  res.status(201).json(data);
};

const handleGetAll = async (req, res) => {
  const data = await getAll(req.body);
  res.status(200).json(data);
};

module.exports = {
  handlePost,
  handleGetAll,
};
