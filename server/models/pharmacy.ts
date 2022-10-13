import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config/connection';

class Pharmacy extends Model {
  declare id:number;

  declare name:string;

  declare email:string;

  declare phone:number;

  declare location:string;

  declare img:string;

  declare desc:string;

  declare pass:string;

  declare license_number:number;

  declare status:string;

  declare owner_name:string;

  declare owner_id: number;

  declare owner_img:string;
}

Pharmacy.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    license_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    owner_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize },
);
