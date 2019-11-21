'use strict';

const Joi = require('@hapi/joi');

module.exports = (session) => {
  return Joi.object({
    id: Joi.number(),
    classId: Joi.number().required(),
    teacherId: Joi.number().required(),
    date: Joi.required().isoDate(),
    start: Joi.required(),
    timeZone: Joi.required().alphanum().pattern('[a-zA-z]'),
    duaration: Joi.required().number().min(1).max(3),
    link: Joi.required().min(2).max(50).pattern('[a-zA-z'),
    status: Joi.required().min(4).max(50).pattern('[a-zA-z'),
    sessionFile: Joi.required().min(2).max(50).pattern('[a-zA-z'),
  }).validate(session);
}
