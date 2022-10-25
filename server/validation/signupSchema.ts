import Joi from 'joi';
import { userData } from '../middlewares/interfaces';

const signupSchema = (data: userData) => {
  const schema = Joi.object({
    owner_name: Joi.string().required(),
    owner_id: Joi.number().required(),
    name: Joi.string().required(),
    license_number: Joi.number().required(),
    location: Joi.string().required(),
    phone: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref('password'),
  });

  return schema.validateAsync(data);
};

export default signupSchema;
