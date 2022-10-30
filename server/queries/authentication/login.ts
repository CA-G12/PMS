import { Pharmacy as pharmaciesModel } from '../../models';

const loginQuery = (pharmacyEmail: String) =>
  pharmaciesModel.findAll({
    where: {
      email: pharmacyEmail,
    },
  });

export default loginQuery;
