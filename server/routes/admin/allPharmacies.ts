import { Router } from 'express';
import { getAllPharmacies } from '../../controllers/admin';
import adminAuth from '../../middlewares/adminAuth';

const adminRouter = Router();

adminRouter.get('/admin/pharmacies', adminAuth, getAllPharmacies);

export default adminRouter;
