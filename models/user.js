const mysql = require('../db');

const createOne = async (body) => {
    const data = await mysql.query('INSERT INTO user SET ?', [body]);
    const result = await getOneById(data[0].insertId);
    return result[0];
};

const getAll = async () => {
  const result = await mysql.query('SELECT * FROM user');
  return result[0];
};

const getOneById = async (id) => {
  const result = await mysql.query('SELECT * FROM user WHERE id= ?', [id]);
  return result[0];
};

module.exports = { 
  getAll,
  createOne
};
