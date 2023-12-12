import express from 'express'
import {register, login , getProfile} from '../controllers/user.controller.js'

const router = express();

router.post('/register', register);
router.post('/login', login);
router.get('/profile',getProfile);


export default router;