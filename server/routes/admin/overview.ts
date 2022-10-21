import { Router } from 'express';
import { getAdminOverview } from '../../controllers/admin';
import adminAuth from '../../middlewares/adminAuth';

const overviewRouter = Router();

overviewRouter.get('/admin/statistics', adminAuth, getAdminOverview);

export default overviewRouter;
