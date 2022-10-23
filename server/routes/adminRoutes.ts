import { Router } from 'express';
import { getAdminOverview, requestStatus, getAllPharmacies } from '../controllers';
import { auth } from '../middlewares';
import adminAuth from '../middlewares/adminAuth';

const adminRouter = Router();

adminRouter.get('/admin/statistics', auth, adminAuth, getAdminOverview);
adminRouter.get('/admin/pharmacies', auth, adminAuth, getAllPharmacies);
adminRouter.put('/admin/requests/:requestId', auth, adminAuth, requestStatus);

export default adminRouter;
