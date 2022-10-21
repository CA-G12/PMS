import Joi from 'joi';

const pharmacyStatusval = Joi.object({
  status: Joi.string().valid('Pending', 'Rejected', 'Approved'),
  pharmacyId: Joi.number().required(),
});

export default pharmacyStatusval;
