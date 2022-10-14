import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config/connection';

class adminProduct extends Model {
  declare id: number;

  declare product_id: number;

  declare expired_quantity: number;

  declare in_stock_quantity: number;
}

adminProduct.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
