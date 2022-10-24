import Joi from 'joi';

const pharmacyStatusval = Joi.object({
  status: Joi.string().valid('Opened', 'Closed', 'Rejected', 'Pending'),
  pharmacyId: Joi.number().required(),
});

export default pharmacyStatusval;
