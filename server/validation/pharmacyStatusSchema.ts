import Joi from 'joi';

const pharmacyStatusSchema = (status:string, page:number) => {
  const schema = Joi.object({
    status: Joi.string().valid('Opened', 'Pending', 'Rejected', 'Closed'),
    page: Joi.number().required(),
  });

  return schema.validateAsync({ status, page });
};

export default pharmacyStatusSchema;
