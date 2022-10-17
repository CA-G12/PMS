import { Router } from 'express';
import { getAllPharmacies } from '../../controllers/admin';

const adminRouter = Router();

adminRouter.get('/admin/pharmacies/:pageNum/:status', getAllPharmacies);

export default adminRouter;
