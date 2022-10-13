import { Model, DataTypes } from 'sequelize';

import sequelize from '../database/config/connection';

class Product extends Model {
  declare id: number;

  declare name: String;

  declare description: String;

  declare price: number;

  declare expired_date: number;

  declare img: String;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expired_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize },
);
