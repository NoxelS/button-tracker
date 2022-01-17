import { Router } from 'express';

import AuthRouter from './auth';


// Init router and path
const router = Router();

// Add sub-routes
router.use('/auth', AuthRouter);

/** This hase pure test purpose */
router.post('/foo-bar', async (req, res) => {
    res.send(req.body);
});

// Export the base-router
export default router;
