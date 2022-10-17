import { ProductPharmacy } from '../../models/index';

const getProductsAdminCount = async () => ProductPharmacy.count();

export default getProductsAdminCount;
