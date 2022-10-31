import sequelize from '../database/config/connection';
import AdminProduct from './adminProduct';
import Pharmacy from './pharmacy';
import Product from './product';
import ProductsRequest from './productsRequest';
import SalesHistory from './salesHistory';
import ProductPharmacy from './productPharmacy';
import admin from './admin';

Pharmacy.hasMany(ProductPharmacy, { foreignKey: 'pharmacy_id' });
ProductPharmacy.belongsTo(Pharmacy, { foreignKey: 'pharmacy_id' });

Product.hasMany(ProductPharmacy, { foreignKey: 'product_id' });
ProductPharmacy.belongsTo(Product, { foreignKey: 'product_id' });

Pharmacy.hasMany(SalesHistory, { foreignKey: 'pharmacy_id' });
SalesHistory.belongsTo(Pharmacy, { foreignKey: 'pharmacy_id' });

Pharmacy.hasMany(ProductsRequest, { foreignKey: 'pharmacy_id' });
ProductsRequest.belongsTo(Pharmacy, { foreignKey: 'pharmacy_id' });

Product.hasMany(SalesHistory, { foreignKey: 'product_id' });
SalesHistory.belongsTo(Product, { foreignKey: 'pharmacy_id' });

Product.hasOne(ProductsRequest, { foreignKey: 'product_id' });
ProductsRequest.belongsTo(Product, { foreignKey: 'pharmacy_id' });

Product.hasMany(AdminProduct, { foreignKey: 'product_id' });
AdminProduct.belongsTo(Product, { foreignKey: 'pharmacy_id' });

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
