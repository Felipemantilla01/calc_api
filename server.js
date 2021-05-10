/**
 * Copyright by Felipe.
 */
require('rootpath')();
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
const basicAuth = require('_helpers/basic-auth');
const errorHandler = require('_helpers/error-handler');

const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: true }');
}); 

let router = require('./app/routers/router.js');

const cors = require('cors')
const corsOptions = {
  origin: 'http://34.229.63.119',
  // origin: 'http://localhost:4200',
  // origin: 'http://18.220.63.12',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(basicAuth);

app.use('/', router);

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// Create a Server
const server = app.listen(80, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})


