var Sequelize = require('sequelize');

module.exports = new Sequelize('CV.GunaJaya', 'postgres', 'Theyallo01', {
  host: 'localhost',
  dialect: "postgres",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});