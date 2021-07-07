const Joi = require('joi');

const MessageDto = Joi.object({
    body: Joi.object().keys({
      user: Joi.string().required(),
      type: Joi.string().required(),
      text: Joi.string(),
      file_name: Joi.string(),
      url: Joi.string(),
    }).unknown(true),
  }).unknown(true);

  module.exports = { MessageDto };