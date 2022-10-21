import { Router } from 'express';
import { requestStatus, getAllPharmacies } from '../../controllers';
import adminAuth from '../../middlewares/adminAuth';

const adminRouter = Router();

adminRouter.get('/admin/pharmacies', adminAuth, getAllPharmacies);
adminRouter.put('/admin/requests/:requestId', adminAuth, requestStatus);

export default adminRouter;
