const mysql = require('../db');

const createOne = async ({body, team}, id) => {
    const data = await mysql.query('INSERT INTO candidate SET ?', [body]);
    console.log(body, team, id)
    await createUserHasCandidate(id, data[0].insertId)
    console.log(team.team_id)
    await createTeamHasJobHasCandidate(team.job_id, team.team_id, id, team.status)
    const result = await getOneById(data[0].insertId);
    return result[0];
};

const createUserHasCandidate = async (user_id, candidate_id) =>{
  await mysql.query('INSERT INTO user_has_candidate SET ?', {user_id, candidate_id});
};

const createTeamHasJobHasCandidate = async (team_has_job_job_id, team_has_job_team_id, candidate_id, status) =>{
  console.log(status)
  await mysql.query('INSERT INTO team_has_job_has_candidate SET ?', [{team_has_job_job_id, team_has_job_team_id, candidate_id, status}]);
};

const getAll = async () => {
  const result = await mysql.query('SELECT * FROM candidate');
  return result[0];
};

const getAllByTeamId = async (id) => {
  const result = await mysql.query('SELECT * FROM team_has_job_has_candidate WHERE team_has_job_team_id = ?', [id]);
  return result[0];
};

const getAllByTeamAndJobId = async (job_id, id) => {
  const result = await mysql.query('SELECT * FROM team_has_job_has_candidate WHERE team_has_job_job_id = ? AND team_has_job_team_id = ?',[job_id,id]);
  return result[0];
};

const getOneById = async (id) => {
  const result = await mysql.query('SELECT * FROM candidate WHERE id= ?', [id]);
  return result[0];
};

module.exports = { 
  getAll,
  createOne,
  getAllByTeamId,
  getAllByTeamAndJobId
};
