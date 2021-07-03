const { createOne, getAll, getAllByUserId, getAllByTeamId, getOneById} = require('../models/team');

const handlePost = async (req, res) => {
  const data = await createOne(req.body, req.params.id);
  res.status(201).json(data);
};

const handleGetAll = async (req, res) => {
  const data = await getAll(req.body);
  res.status(200).json(data);
};

const handleGetAllByUserId = async (req, res) => {
  const data = await getAllByUserId(req.params.id);
  res.status(200).json(data);
};

const handleGetAllByTeamId = async (req, res) => {
  const data = await getAllByTeamId(req.params.id);
  res.status(200).json(data);
};

const handleGetOneById = async (req, res) => {
  const data = await getOneById(req.params.id);
  res.status(200).json(data);
}

module.exports = {
  handlePost,
  handleGetAll,
  handleGetAllByUserId,
  handleGetAllByTeamId,
  handleGetOneById
};
