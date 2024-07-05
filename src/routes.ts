import { Router } from 'express';
import { aboutPage, contactFormHandler, landingPage, landingPageAPI } from './handler.ts';

const router = Router();

router.get('/api', landingPageAPI);
router.get('/:id', landingPage);
router.get('/', landingPage);

router.get('/about', aboutPage);

router.post('/contact_form', contactFormHandler);
router.get('/contact', (req, res) => {
    res.render('contact', {
        name: '',
    });
});

export default router;
