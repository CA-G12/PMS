import Joi from 'joi';

const loginSchema = (email: string, loginPassword: string) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    loginPassword: Joi.string().required(),
  });

  return schema.validateAsync({ email, loginPassword });
};

export default loginSchema;
