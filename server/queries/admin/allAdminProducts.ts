import { AdminProduct } from '../../models/index';

const getProductsAdmin = async () => AdminProduct.findAll();

export default getProductsAdmin;
