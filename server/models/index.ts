import sequelize from '../database/config/connection';
import AdminProduct from './adminProduct';
import Pharmacy from './pharmacy';
import Product from './product';
import ProductsRequest from './productsRequest';
import SalesHistory from './salesHistory';
import ProductPharmacy from './productPharmacy';
import admin from './admin';

Pharmacy.hasMany(ProductPharmacy, { foreignKey: 'pharmacy_id' });
ProductPharmacy.belongsTo(Pharmacy);

Product.hasMany(ProductPharmacy, { foreignKey: 'product_id' });
ProductPharmacy.belongsTo(Product);

Pharmacy.hasMany(SalesHistory, { foreignKey: 'pharmacy_id' });
SalesHistory.belongsTo(Pharmacy);

Pharmacy.hasMany(ProductsRequest, { foreignKey: 'pharmacy_id' });
ProductsRequest.belongsTo(Pharmacy);

Product.hasMany(SalesHistory, { foreignKey: 'product_id' });
SalesHistory.belongsTo(Product);

Product.hasOne(ProductsRequest, { foreignKey: 'product_id' });
ProductsRequest.belongsTo(Product);

Product.hasMany(AdminProduct, { foreignKey: 'product_id' });
AdminProduct.belongsTo(Product);

export {
  AdminProduct,
  Pharmacy,
  Product,
  ProductPharmacy,
  SalesHistory,
  ProductsRequest,
  admin,
  sequelize,
};
