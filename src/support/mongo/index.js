const databaseInstance = require('../../config/database');

/**
 * Switch the database given a database name.
 * If the the database name doesn't exits,
 * the database will be created until an record is inserted.
 * @param {String} modelName Schema name
 * @param {Object} schema Mongoose schema
 * @param {String} dbName Database name
 * @param {Object} plugin Optional plugin to set to the model
 * @returns {Object} Connection instance
 */
function getDB(modelName, schema, dbName, plugin = null) {
    if (databaseInstance) {
      const db = databaseInstance.useDb(dbName, { useCache: true });
      // Setting a plugin if exists into the schema
      if (plugin) schema.plugin(plugin);
      // Setting the schema
      db.model(modelName, schema);
      return db;
    }
    throw new Error('Error swtiching database');
}

/**
 * Returns the schema registered in the tenat.
 * @param {String} modelName Scehma name
 * @param {Object} schema Mongoose schema
 * @param {String} dbName Database name
 *  @param {Object} plugin Optional plugin to set to the model
 * @returns {Object} Mongo schema instance
 */
function getModel(modelName, schema, plugin = null) {
    const tenatDb = getDB(modelName, schema, 'metadata_database', plugin);
    // Getting the schema from the tenant
    return tenatDb.model(modelName);
}

module.exports = { getModel };