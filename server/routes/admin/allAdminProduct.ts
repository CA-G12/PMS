import express from 'express';
import { getAllProductsAdmin, getOneProductForId } from '../../controllers';
// getAllProductsAdmin
const router: any = express.Router();

router.get('/admin/products', getAllProductsAdmin);
router.get('/admin/products/:productId', getOneProductForId);
export default router;
