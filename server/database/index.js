const {Sequelize, DataTypes} = require('sequelize');
const creds = require('./sqlAuth.js');

const db = new Sequelize(
  'options', 'root', creds.SQLCREDS, {
    host: '127.0.0.1',
    // can try port number
    port: 3306,
    dialect: 'mysql'
  });

try {
  db.authenticate();
  console.log('db connection successful!');
} catch (error) {
  console.error('Unable to connect to DB', error);
}


module.exports = db;
