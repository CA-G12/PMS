import {
  Pharmacy as pharmaciesModel,
// eslint-disable-next-line import/extensions
} from '../../models';

const loginQuery = (pharmacyEmail: String) => pharmaciesModel.findAll({
  where: {
    email: pharmacyEmail,
  },
});

export default loginQuery;
