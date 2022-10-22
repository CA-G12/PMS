import express from 'express';
import { getAllProductsAdmin, getOneProductForId } from '../../controllers';

const router: any = express.Router();

router.get('/admin/products', getAllProductsAdmin);
router.get('/admin/products/:productId', getOneProductForId);

export default router;
