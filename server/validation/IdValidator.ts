import Joi from 'joi';

const IdValidator = (
  pharmacyId: number,
  quantity: number,
  productId: number
) => {
  const schema = Joi.object({
    pharmacyId: Joi.number().required(),
    quantity: Joi.number().required(),
    productId: Joi.number().required(),
  });
  return schema.validateAsync({ pharmacyId, quantity, productId });
};

export default IdValidator;
