/**
 * Copyright by Felipe Mantilla Gomez
 */

const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Comparison = require('../models/comparison.model.js')(sequelize, Sequelize);
db.User = require('../models/user.model.js')(sequelize, Sequelize);
db.Material = require('../models/material.model.js')(sequelize, Sequelize);
db.Price = require('../models/price.model.js')(sequelize, Sequelize);
db.MaterialNameArea = require('../models/material_name_area.model.js')(sequelize, Sequelize);

module.exports = db;