import { Model, DataTypes, NOW } from 'sequelize';
import sequelize from '../database/config/connection';

class salesHistory extends Model {
  declare id: number;

  declare quantity: number;

  declare date: number;
}

salesHistory.init(
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
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
  { sequelize },
);
