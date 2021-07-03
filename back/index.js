const express = require('express');
const cors = require('cors');
const { SERVER_PORT } = require('./env');


const app = express();

app.use(cors('http://localhost:3000'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

const server = app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on : ${SERVER_PORT}`);
});

process.on('unhandledRejection', (error) => {
  console.error('unhandledRejection', JSON.stringify(error), error.stack);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('uncaughtException', JSON.stringify(error), error.stack);
  process.exit(1);
});

process.on('beforeExit', () => {
  app.close((error) => {
    if (error) console.error(JSON.stringify(error), error.stack);
  });
});

module.exports = server;
