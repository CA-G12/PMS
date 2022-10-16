import {
  pharmacies as pharmaciesModel,
// eslint-disable-next-line import/extensions
} from '../../models';

const signInQuery = (pharmacyEmail: String) => pharmaciesModel.findAll({
  where: {
    email: pharmacyEmail,
  },
});

export default { signInQuery };
