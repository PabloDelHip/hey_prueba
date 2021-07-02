const Joi = require('joi');

const UserDto = Joi.object({
    body: Joi.object().keys({
      users: Joi.string().required(),
    }).unknown(true),
  }).unknown(true);

  module.exports = { UserDto };