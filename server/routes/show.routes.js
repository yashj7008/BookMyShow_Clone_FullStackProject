import { Router } from 'express'
import {createShow ,listShows, showDetail, getShowById } from '../controllers/show.controller.js'
import isLoggedIn from '../middlewares/authentication.js';
import authorizedRoles from '../middlewares/authorization.js';

const router = Router();

router.post('/',isLoggedIn,authorizedRoles('ADMIN'), createShow);
//router.post('/', createShow);
router.get('/list', listShows);
//router.get('/:showId', showDetail);
router.get('/:showId', getShowById);


export default router;
