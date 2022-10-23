import express from 'express';
import { getAllProductsAdmin } from '../../controllers';
import { adminAuth, auth } from '../../middlewares';

const router: any = express.Router();

router.get('/admin/products', auth, adminAuth, getAllProductsAdmin);

export default router;
