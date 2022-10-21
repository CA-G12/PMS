import { Router } from 'express';
import { getAllPharmacies } from '../../controllers/admin';
import adminAuth from '../../middlewares/adminAuth';

const router = Router();

router.get('/admin/pharmacies', adminAuth, getAllPharmacies);

export default router;
