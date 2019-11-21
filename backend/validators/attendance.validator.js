'use strict';

const Joi = require('@hapi/joi');

module.exports = (attendance) => {
  return Joi.object({
    sessionId: Joi.number().required(),
    studentId: Joi.number().required()
  }).validate(attendance);
}
