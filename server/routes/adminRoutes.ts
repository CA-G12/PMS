import { Router } from 'express';
import {
  getAdminOverview,
  requestStatus,
  getAllPharmacies,
  getAllProductsAdmin,
  updatePharmacyStatusId,
  allRequests,
} from '../controllers';
import { auth, adminAuth } from '../middlewares';

const adminRouter = Router();

adminRouter.get('/admin/statistics', auth, adminAuth, getAdminOverview);
adminRouter.get('/admin/pharmacies', auth, adminAuth, getAllPharmacies);
adminRouter.get('/admin/requests', auth, adminAuth, allRequests);
adminRouter.get('/admin/products', auth, adminAuth, getAllProductsAdmin);

adminRouter.put('/admin/requests/:requestId', auth, adminAuth, requestStatus);
adminRouter.put(
  '/admin/pharmacy/:pharmacyId',
  auth,
  adminAuth,
  updatePharmacyStatusId
);

export default adminRouter;
