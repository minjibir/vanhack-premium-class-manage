'use strict';

const Joi = require('@hapi/joi');

module.exports = (teacher) => {
  return Joi.object({
    id: Joi.number(),
    firstName: Joi.string().required().min(2).max(50).pattern(/[a-zA-z]/),
    lastName: Joi.string().required().alphanum().min(2).max(50).pattern(/[a-zA-z]/),
    email: Joi.string().required().min(2).max(50).email(),
    password: Joi.string().required().min(6).max(50)
  }).validate(teacher);
}
