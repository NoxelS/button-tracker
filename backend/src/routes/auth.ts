import logger from '@shared/logger';
import { verifyUser } from '@shared/passport.utils';
import { Router } from 'express';
import { readFileSync } from 'fs';
import { sign } from 'jsonwebtoken';
import passport from 'passport';
import { join } from 'path';

import { ErrorResponse, LoginResponse } from '../models/response.model';


// Init shared
const router = Router();

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    verifyUser(username, password, (err, user) => {
        if (err) {
            res.json(new ErrorResponse(err));
        } else if (user) {
            const userId = user.id;
            const expiresIn = '1d';
            const PRIV_KEY = readFileSync(join(__dirname, '../keys/id_rsa_priv.pem'));
            const payload = {
                sub: userId,
                iat: Date.now()
            };
            const signedToken = sign(payload, PRIV_KEY, { expiresIn, algorithm: 'RS256' });
            res.json(new LoginResponse(signedToken, expiresIn, user));
        } else {
            res.json(new ErrorResponse('Could not login.'));
        }
    });
});

export default router;
