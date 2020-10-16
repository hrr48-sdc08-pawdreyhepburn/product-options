const {Sequelize, DataTypes} = require('sequelize');
const creds = require('./sqlAuth.js');

const db = new Sequelize(
  'sdc_options', 'muhammad', creds.SQLCREDS, {
    host: 'localhost',
    // can try port number
    port: 5432,
    dialect: 'postgres'
  });

try {
  db.authenticate();
  console.log('Postgres connection successful!');
} catch (error) {
  console.error('Unable to connect to Postgres', error);
}


module.exports = db;
