import { admin as adminModel } from '../../models';

const adminLoginQuery = (adminEmail: String) =>
  adminModel.findAll({
    where: {
      email: adminEmail,
    },
  });

export default adminLoginQuery;
