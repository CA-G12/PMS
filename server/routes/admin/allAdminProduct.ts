import express from 'express';
import { getAllProductsAdmin } from '../../controllers';

const router: any = express.Router();

router.get('/admin/products', getAllProductsAdmin);

export default router;
