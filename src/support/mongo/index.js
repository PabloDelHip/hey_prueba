const databaseInstance = require('../../config/database');

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

function getModel(modelName, schema, plugin = null) {
    const tenatDb = getDB(modelName, schema, 'metadata_database', plugin);
    // Getting the schema from the tenant
    return tenatDb.model(modelName);
}

module.exports = { getModel };