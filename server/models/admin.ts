import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config/connection';

export default class Admin extends Model {
  declare id: number;

  declare email: string;

  declare image: string;

  declare password: string;
}

Admin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue:
        'https://static.spacecrafted.com/ecb84ffc05884cf7aabf40ca5697efae/i/b03141b87e364d97aca2548076e12e8d/1/4SoifmQp45JMgBnHp7ed2/Pharmacy%20Image%252831%2529.jpg',
    },
  },
  { sequelize }
);
