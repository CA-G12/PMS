import adminProduct from './adminProduct';
import Pharmacy from './pharmacy';
import Product from './product';
import productsRequest from './productsRequest';
import salesHistory from './salesHistory';
import productPharmacy from './productPharmacy';

Pharmacy.hasMany(productPharmacy, { foreignKey: 'pharmacy_id' });

Product.hasMany(productPharmacy, { foreignKey: 'product_id' });

Pharmacy.hasMany(salesHistory, { foreignKey: 'pharmacy_id' });

Pharmacy.hasMany(productsRequest, { foreignKey: 'pharmacy_id' });

Product.hasMany(salesHistory, { foreignKey: 'product_id' });

Product.hasOne(productsRequest, { foreignKey: 'product_id' });

Product.hasMany(adminProduct, { foreignKey: 'product_id' });

export {
  adminProduct,
  Pharmacy,
  Product,
  productPharmacy,
  salesHistory,
  productsRequest,
};
