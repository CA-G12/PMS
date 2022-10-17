import express from 'express';
import { allAdminProductCount } from '../../controllers';

const router: any = express.Router();

router.get('/admin/products/count', allAdminProductCount);

export default router;
