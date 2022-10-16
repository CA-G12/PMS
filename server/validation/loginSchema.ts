const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi
    .string()
    .min(10)
    .max(100)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi
    .string()
    .min(7)
    .alphanum(),
  repeat_password: Joi
    .ref('password'),
});

export default loginSchema;
