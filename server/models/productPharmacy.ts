import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config/connection';

export default class productPharmacy extends Model {
  declare id:number;

  declare pharmacy_id:number;

  declare product_id:number;

  declare quantity:number;
}

productPharmacy.init(
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
  },
  { sequelize },
);
