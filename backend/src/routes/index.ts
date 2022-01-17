import { Router } from 'express';

import AuthRouter from './auth';


// Init router and path
const router = Router();

// Add sub-routes
router.use('/auth', AuthRouter);

// Export the base-router
export default router;
