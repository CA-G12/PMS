import { Model, DataTypes, NOW } from 'sequelize';
import sequelize from '../database/config/connection';

export default class SalesHistory extends Model {
  declare id: number;

  declare quantity: number;

  declare date: number;
}

SalesHistory.init(
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
  },
  { sequelize }
);
