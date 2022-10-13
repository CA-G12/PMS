import { Model, DataTypes } from 'sequelize';

import sequelize from '../database/config/connection';

class productsRequest extends Model {
  declare id: number;

  declare quantity: number;

  declare status: String;
}

productsRequest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize },
);
