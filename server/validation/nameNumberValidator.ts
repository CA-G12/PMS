import Joi from 'joi';

const nameNumberValidator = (
  pharmacyName: string,
  medicineName: string,
  page: number,
  limit: number
) => {
  const schema = Joi.object({
    pharmacyName: Joi.string(),
    medicineName: Joi.string(),
    page: Joi.number(),
    limit: Joi.number(),
  });
  return schema.validateAsync({ pharmacyName, medicineName, page, limit });
};

export default nameNumberValidator;
