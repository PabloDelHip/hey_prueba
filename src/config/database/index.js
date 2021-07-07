const mongoose = require('mongoose');
const { getDatabaseConfig } = require('./database.config.js');

const options = getDatabaseConfig();

const connect = () => mongoose.createConnection(process.env.MONGO_URL, options);

/**
 * Create a new connection to database server.
 * @returns {Object} Connection instance
 */
function createConnection() {
  const databaseInstance = connect();
  return databaseInstance;
}

module.exports = (createConnection)();
