import { sequelize } from '../../models';

const buildDb = async () => {
  await sequelize.sync({ force: true });
};

buildDb();

export default buildDb;
