const Joi = require('@hapi/joi');

module.exports = (premiumClass) => {
  return Joi.object({
    id: Joi.number(),
    teacherId: Joi.number().required(),
    title: Joi.string().required().min(3).max(255),
    description: Joi.string(),
  }).validate(premiumClass);
}
