import Router from 'express';
import { allRequests } from '../../controllers';

const router = Router();

router.get('/admin/requests', allRequests);

export default router;
