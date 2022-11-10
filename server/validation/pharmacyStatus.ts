import Joi from 'joi';

const pharmacyStatusValue = (pharmacyId: number, status: string) => {
  const schema = Joi.object({
    status: Joi.string().valid('Opened', 'Rejected'),
    pharmacyId: Joi.number().required(),
  });
  return schema.validateAsync({ status, pharmacyId });
};

export default pharmacyStatusValue;
