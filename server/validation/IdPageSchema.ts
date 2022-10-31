import Joi from 'joi';

const pageIdSchema = (page: number, pharmacyId: number) => {
  const schema = Joi.object({
    page: Joi.number(),
    pharmacyId: Joi.number().required(),
  });
  return schema.validateAsync({ page, pharmacyId });
};
export default pageIdSchema;
