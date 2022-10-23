import { Router } from 'express';
import allAdminProducts from './allAdminProduct';
import requestStatusRouter from './requestStatus';
import { auth, adminAuth } from '../../middlewares';
import getPharmacyStatusId from './pharamcyStatus';

const adminRouter = Router();

adminRouter.use(requestStatusRouter);
adminRouter.use(allAdminProducts);
adminRouter.use(getPharmacyStatusId);

export default adminRouter;
