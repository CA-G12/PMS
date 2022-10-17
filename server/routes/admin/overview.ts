import { Router } from 'express';
import { getAdminOverview } from '../../controllers/admin';

const adminRouter = Router();

adminRouter.get('/admin/statistics', getAdminOverview);

export default adminRouter;
