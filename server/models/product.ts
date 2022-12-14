import { Model, DataTypes } from 'sequelize';

import sequelize from '../database/config/connection';

export default class Product extends Model {
  declare id: number;

  declare name: String;

  declare description: String;

  declare price: number;

  declare expired_date: number;

  declare img: String;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expired_date: {
      type: DataTypes.DATE,
      // allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue:
        'https://images-platform.99static.com/NDhiVKLyYmhNKMyMj_8R0ECcog8=/0x0:1500x1500/500x500/top/smart/99designs-contests-attachments/86/86093/attachment_86093607',
    },
  },
  { sequelize }
);
