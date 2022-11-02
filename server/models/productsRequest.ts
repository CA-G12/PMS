import { Model, DataTypes } from 'sequelize';

import sequelize from '../database/config/connection';

export default class ProductsRequest extends Model {
  declare id: number;

  declare quantity: number;

  declare status: String;
}

ProductsRequest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Approved', 'Pending', 'Rejected'),
      defaultValue: 'Pending',
    },
  },
  { sequelize }
);
