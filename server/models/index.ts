import AdminProduct from './adminProduct';
import Pharmacy from './pharmacy';
import Product from './product';
import ProductsRequest from './productsRequest';
import SalesHistory from './salesHistory';
import ProductPharmacy from './productPharmacy';

Pharmacy.hasMany(ProductPharmacy, { foreignKey: 'pharmacy_id' });

Product.hasMany(ProductPharmacy, { foreignKey: 'product_id' });

Pharmacy.hasMany(SalesHistory, { foreignKey: 'pharmacy_id' });

Pharmacy.hasMany(ProductsRequest, { foreignKey: 'pharmacy_id' });

Product.hasMany(SalesHistory, { foreignKey: 'product_id' });

Product.hasOne(ProductsRequest, { foreignKey: 'product_id' });

Product.hasMany(AdminProduct, { foreignKey: 'product_id' });

export {
  AdminProduct,
  Pharmacy,
  Product,
  ProductPharmacy,
  SalesHistory,
  ProductsRequest,
};
