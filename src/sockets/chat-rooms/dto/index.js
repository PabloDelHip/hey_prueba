const Joi = require('joi');

const MessageDto = Joi.object({
      user_name: Joi.string().required(),
      type: Joi.string().required(),
      text: Joi.string().optional(),
      url: Joi.string().optional()
  }).unknown(true);

  const UserDto = Joi.object({
    user_name: Joi.string().required()
}).unknown(true);

  module.exports = { UserDto, MessageDto };