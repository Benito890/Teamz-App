const user = require('./user');
const team = require('./team');
const job = require('./job');
const candidate = require('./candidate');

module.exports = (app) => {
  app.use('/user', user);
  app.use('/team', team);
  app.use('/job', job);
  app.use('/candidate', candidate);
};
