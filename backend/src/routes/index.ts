import { Router } from 'express';

import { BaseResponse } from '../models/response.model';
import AuthRouter from './auth';


// Init router and path
const router = Router();

// Add sub-routes
router.use('/auth', AuthRouter);

/** This hase pure test purpose */
router.post('/foo-bar', async (req, res) => {
    res.send(new BaseResponse(req.body));
});

router.get('/foo-bar', async (req, res) => {
    res.send('Test');
});

// Export the base-router
export default router;
