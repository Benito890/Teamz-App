const { createOne, getAll, getAllByTeamId} = require('../models/candidate');

const handlePost = async (req, res) => {
  const data = await createOne(req.body, req.params.id);
  res.status(201).json(data);
};

const handleGetAll = async (req, res) => {
  const data = await getAll(req.body);
  res.status(200).json(data);
};

const handleGetAllByTeamId = async (req, res) => {
  const data = await getAllByTeamId(req.params.id);
  res.status(200).json(data);
};

const handleGetAllByTeamAndJobId = async (req, res) => {
  const data = await getAllByTeamId(req.params.job_id, req.params.id);
  res.status(200).json(data);
};

module.exports = {
  handlePost,
  handleGetAll,
  handleGetAllByTeamId,
  handleGetAllByTeamAndJobId
};
