
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const { users } = require('./routes/users.js');

const server = express();

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))

server.use('/api/v1/', users);

server.listen(9191, () => {
  console.log('Server is UP...');
});
