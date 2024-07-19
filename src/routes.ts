import { Router } from 'express';
import { aboutPage, contactFormHandler, getAllUsers, landingPage, landingPageAPI } from './handler.ts';

const router = Router();

router.get('/users', getAllUsers);

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
