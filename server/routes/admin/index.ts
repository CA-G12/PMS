import { Router } from "express";
import { getAdminOverview } from "../../controllers";
import adminAuth from "../../middlewares/adminAuth";

const adminRouter = Router();

adminRouter.get('/admin/statistics', adminAuth, getAdminOverview);

export default adminRouter;
