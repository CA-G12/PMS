import Joi from 'joi';

const requestStatusSchema = Joi.object({
  status: Joi.string().valid('Pending', 'Rejected', 'Approved'),
  requestId: Joi.number().required(),
});

export default requestStatusSchema;
