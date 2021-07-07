
/**
 * Validate the entire request object
 * and returns each relevant section mixed.
 * @param {Object} schema Dto schema
 * @param {Object} request body object
 * @returns {Object} Error | Data
 */
function fullValidate(schema, request) {
    const isValid = schema.validate(request);
    const { error } = schema.validate(request);
  
    if (isValid.error) {
      return {error : isValid.error.details[0]};
    }
  
    return isValid.value;
  }

  module.exports = { fullValidate };