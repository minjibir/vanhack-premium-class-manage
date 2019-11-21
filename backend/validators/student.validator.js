'use strict';

const Joi = require('@hapi/joi');

module.exports = (student) => {
  return Joi.object({
    id: Joi.number(),
    firstName: Joi.required().min(2).max(50).pattern('[a-zA-z'),
    lastName: Joi.required().min(2).max(50).pattern('[a-zA-z'),
    membership: Joi.required().min(2).max(50).pattern('[a-zA-z'),
    email: Joi.required().min(2).max(50).email(),
    password: Joi.required().min(6).max(50).pattern('[a-zA-z')
  }).validate(student);
}
