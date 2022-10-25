import { Router } from 'express';
import getPharmacyRequests from '../../controllers/pharamcies';

const pharmacyRoutes = Router();

pharmacyRoutes.get('/pharmacy/pharmacyId/requests', getPharmacyRequests);

export default pharmacyRoutes;
