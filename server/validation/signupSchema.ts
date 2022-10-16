import Joi from 'joi';

type userData = {
  owner_name:string,
    owner_id: number,
    name:string,
    license_number:number,
    location:string,
    phone:number,
    email:string,
    password:string,
    confirmPassword:string
}

const signupSchema = (data:userData) => {
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
