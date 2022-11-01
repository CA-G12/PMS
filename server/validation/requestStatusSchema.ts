import Joi from 'joi';

const requestStatusSchema = (status: string, requestId: number) => {
  const schema = Joi.object({
    status: Joi.string().valid('Pending', 'Rejected', 'Approved'),
    requestId: Joi.number().required(),
  });
  return schema.validateAsync({ status, requestId });
};

export default requestStatusSchema;
