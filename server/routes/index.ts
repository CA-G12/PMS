import { Router } from 'express';
import authenticationRouter from './authentication';
import adminRouter from './admin';

const router = Router();

router.use(authenticationRouter);
router.use(adminRouter);

export default router;
