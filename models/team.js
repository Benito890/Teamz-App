const mysql = require('../db');

const createOne = async ({body, joblist}, id) => {
    const data = await mysql.query('INSERT INTO team SET ?', [body]);
    await createUserHasTeam(id, data[0].insertId);
    await createTeamJobList(joblist, data[0].insertId)
    const result = await getOneById(data[0].insertId);
    return result[0];
};

const createUserHasTeam = async (user_id, team_id) => {
  await mysql.query('INSERT INTO user_has_team SET ?', [{user_id, team_id}]);
};

const createTeamJobList = async (jobs, team_id) => {
  await jobs.map(job =>{mysql.query('INSERT INTO team_has_job SET ?',{team_id, job_id : job}
)});
};

const getAll = async () => {
  const result = await mysql.query('SELECT * FROM team');
  return result[0];
};

const getOneById = async (id) => {
  const result = await mysql.query('SELECT * FROM team WHERE id = ?', [id]);
  return result[0];
};

const getAllByUserId = async (id) => {
  const result = await mysql.query('SELECT * FROM team t JOIN user_has_team u ON u.team_id = t.id WHERE u.user_id = ?', [id]);
  let array = [];
  for (let i = 0; i < result[0].length; i++) { 
    const result2 = await mysql.query('SELECT name FROM job j JOIN team_has_job thj ON thj.job_id = j.id WHERE team_id = ?', result[0][i].team_id);
    console.log(result2[0])
    await array.push(result2[0])
  }
  const object = {teams : result[0], Jobs : array}
  return (object);
};

const getAllByTeamId = async (id) => {
  const result = await mysql.query('SELECT * FROM user_has_team WHERE team_id = ?', [id]);
  return result[0];
};

module.exports = { 
  getAll,
  createOne,
  getAllByUserId,
  getAllByTeamId,
  getOneById
};
