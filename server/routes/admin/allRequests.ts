import Router from 'express';
import { allRequests } from '../../controllers';
import adminAuth from '../../middlewares/adminAuth';

const router = Router();

router.get('/admin/requests', allRequests);

export default router;
