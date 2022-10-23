import { Router } from 'express';
import {
  getAdminOverview, requestStatus, getAllPharmacies, allRequests,
} from '../controllers';
import { auth } from '../middlewares';
import adminAuth from '../middlewares/adminAuth';

const adminRouter = Router();

adminRouter.get('/admin/statistics', auth, adminAuth, getAdminOverview);
adminRouter.get('/admin/pharmacies', auth, adminAuth, getAllPharmacies);
adminRouter.put('/admin/requests/:requestId', auth, adminAuth, requestStatus);
adminRouter.get('/admin/requests', auth, adminAuth, allRequests);

export default adminRouter;
