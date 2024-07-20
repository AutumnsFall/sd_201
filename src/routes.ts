import { Router } from 'express';
import {
    aboutPage,
    contactFormHandler,
    createUserRouteHandler,
    getAllUsersRouteHandler,
    getUserByIdRouteHandler,
    landingPage,
    landingPageAPI,
    searchUserRouteHandler,
} from './handler.ts';

const router = Router();

router.get('/users/search', searchUserRouteHandler);
router.post('/users', createUserRouteHandler);
router.get('/users/:id', getUserByIdRouteHandler);
router.get('/users', getAllUsersRouteHandler);

router.get('/about', aboutPage);

router.post('/contact_form', contactFormHandler);
router.get('/contact', (req, res) => {
    res.render('contact', {
        name: '',
    });
});

router.get('/api', landingPageAPI);
router.get('/:id', landingPage);
router.get('/', landingPage);

export default router;
