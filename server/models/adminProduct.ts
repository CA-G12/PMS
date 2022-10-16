import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config/connection';

export default class AdminProduct extends Model {
  declare id: number;

  declare product_id: number;

  declare expired_quantity: number;

  declare in_stock_quantity: number;
}

AdminProduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    expired_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    in_stock_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize },
);
