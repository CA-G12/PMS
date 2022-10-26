const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  loginPassword: Joi.string().required(),
});

export default loginSchema;
