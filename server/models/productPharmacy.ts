import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config/connection';

export default class ProductPharmacy extends Model {
  declare id: number;

  declare pharmacy_id: number;

  declare product_id: number;

  declare quantity: number;
}

ProductPharmacy.init(
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
  },
  { sequelize }
);
