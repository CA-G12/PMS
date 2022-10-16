import {
  pharmacies as pharmaciesModel,
} from '../../models';

const signInQuery = (pharmacyEmail: String) => pharmaciesModel.findAll({
  where: {
    email: pharmacyEmail,
  },
});

export default { signInQuery };
