import express from 'express';
import { logout } from '../../controllers';

const router: any = express.Router();

router.get('/logout', logout);
