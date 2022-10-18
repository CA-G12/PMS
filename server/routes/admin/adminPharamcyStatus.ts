import express from 'express';
import { getPharmacyStatusId } from '../../controllers';

const router: any = express.Router();

router.put('/admin/pharmacy/:pharmacyId', getPharmacyStatusId);

export default router;
