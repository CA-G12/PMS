import { Router } from "express";
import overviewRouter from "./overview";

const adminRouter = Router();

adminRouter.use(overviewRouter);

export default adminRouter;
