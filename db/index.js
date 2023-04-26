const mysql = require('mysql2');
const config = require('../config');

const connection = mysql.createPool(config.mysql)

module.exports = connection;