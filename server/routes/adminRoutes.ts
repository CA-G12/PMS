import { Router } from "express";
import { getAdminOverview } from "../controllers";
import { auth } from "../middlewares";
import adminAuth from "../middlewares/adminAuth";

const adminRouter = Router();

adminRouter.get('/admin/statistics',auth, adminAuth, getAdminOverview);

export default adminRouter;
