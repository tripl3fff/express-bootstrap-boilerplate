const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'dev',
  connectionLimit: 5
});

module.exports = pool;
