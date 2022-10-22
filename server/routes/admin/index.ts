import { Router } from 'express';
import allAdminProducts from './allAdminProduct';
import requestStatus from './requestStatus';
import { auth, adminAuth } from '../../middlewares';
import getPharmacyStatusId from './pharamcyStatus';

const router = Router();
// we must add the (auth) function but i didn't add it bc throw a error
router.use('/api/v1/', adminAuth, allAdminProducts);
router.use('/api/v1/', adminAuth, getPharmacyStatusId);
router.use('/api/v1/', adminAuth, requestStatus);

export default router;
