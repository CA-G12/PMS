import { Router } from "express";
import adminRouter from "./admin";
import authRouter from "./authentication/signUp";

const router = Router();

router.use(authRouter);
router.use(adminRouter);

export default router;
