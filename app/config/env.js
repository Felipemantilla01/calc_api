/**
 * Copyright by Felipe Mantilla Gomez
 */

const env = {
  database: 'dw',
  username: 'gz12345',
  password: 'ErUcSkT7ZJvzgN7F',
  // host: 'artelye-data-warehouse.cftigksaerjy.us-east-1.rds.amazonaws.com',
  host: 'calculation-report.cfxkmubuijef.us-east-2.rds.amazonaws.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;