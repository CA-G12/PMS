import { Sequelize } from 'sequelize';

const {
  NODE_ENV, DATABASE_URL, DEV_DB_URL, TEST_DB_URL,
} = process.env;

let url: string | undefined;

switch (NODE_ENV) {
  case 'production':
    url = DATABASE_URL;
    break;
  case 'development':
    url = DEV_DB_URL;
    break;
  case 'test':
    url = TEST_DB_URL;
    break;
  default:
    throw new Error('NODE_ENV is not set to any url');
}

if (!url) throw new Error('NODE_ENV is not set to any url');

const sequelize = new Sequelize(url);

export default sequelize;
