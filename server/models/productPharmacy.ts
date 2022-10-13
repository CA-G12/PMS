import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config/connection';

class productPharmacy extends Model {
  declare id:number;

  declare pharmacy_id:number;

  declare product_id:number;

  declare quantity:number;
}

productPharmacy.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pharmacy_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize },
);
