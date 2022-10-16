import Joi from 'joi';

type userData = {
    fullName:string,
    ownerID: number,
    pharmacyName:string,
    licenseNumber:number,
    pharmacyLocation:string,
    phoneNumber:number,
    email:string,
    password:string,
    confirmPassword:string
}

const signupSchema = (data:userData) => {
  const schema = Joi.object({
    fullName: Joi.string().required(),
    ownerID: Joi.number().required(),
    pharmacyName: Joi.string().required(),
    licenseNumber: Joi.number().required(),
    pharmacyLocation: Joi.string().required(),
    phoneNumber: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref('password'),
  });

  return schema.validateAsync(data);
};

export default signupSchema;
