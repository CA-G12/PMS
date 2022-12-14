import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config/connection';

export default class Pharmacy extends Model {
  declare id: number;

  declare name: string;

  declare email: string;

  declare phone: string;

  declare location: string;

  declare img: string;

  declare desc: string;

  declare password: string;

  declare license_number: number;

  declare status: string;

  declare owner_name: string;

  declare owner_id: number;

  declare owner_img: string;
}

Pharmacy.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue:
        'https://static.spacecrafted.com/ecb84ffc05884cf7aabf40ca5697efae/i/b03141b87e364d97aca2548076e12e8d/1/4SoifmQp45JMgBnHp7ed2/Pharmacy%20Image%252831%2529.jpg',
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue:
        'Pharmacies licensed by the Ministry of Health All of their employees',
    },
    license_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Opened', 'Closed', 'Rejected', 'Pending'),
      defaultValue: 'Pending',
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    owner_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_img: {
      type: DataTypes.TEXT,
      defaultValue:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    },
  },
  { sequelize }
);
