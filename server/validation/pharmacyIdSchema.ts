import Joi from 'joi';

const pharmacyIdSchema = (pharmacyId: number) => {
  const schema = Joi.object({
    pharmacyId: Joi.number().required(),
  });
  return schema.validateAsync({ pharmacyId });
};
export default pharmacyIdSchema;
