import { Request, Response } from 'express';

export function landingPage(req: Request, res: Response) {
    try {
        console.log(req.query);
        const { name } = req.query;
        const { email } = req.query;

        console.log(name, email);

        console.log(req.params);
        const { id } = req.params;
        console.log(id);

        var mascots = [
            { name: 'Sammy', organization: 'DigitalOceandfadddddd', birth_year: 2012 },

            { name: 'Tux', organization: 'Linux', birth_year: 1996 },

            { name: 'Moby Docksss', organization: 'Docker', birth_year: 2013 },
        ];

        var tagline = 'No programming concept is THIS IS SPArTA complete without a cute animal mascot.';

        res.render('index', {
            mascots: mascots,

            tagline: tagline,
        });
    } catch (error) {
        console.error(error);
        res.render('error', {
            errorMsg: error.message,
        });
    }
}

export function landingPageAPI(req: Request, res: Response) {
    try {
        var mascots = [
            { name: 'Sammy', organization: 'DigitalOcean', birth_year: 2012 },

            { name: 'Tux', organization: 'Linux', birth_year: 1996 },

            { name: 'Moby Dock', organization: 'Docker', birth_year: 2013 },
        ];

        var tagline = 'No programming concept is THIS IS SPArTA complete without a cute animal mascot.';

        res.json({
            mascots,
            tagline,
        });
    } catch (error) {
        console.error(error);
        res.render('error', {
            errorMsg: error.message,
        });
    }
}

export async function aboutPage(req: Request, res: Response) {
    res.render('about');
}

export const contactFormHandler = (req: Request, res: Response) => {
    try {
        console.log(req.body);

        res.render('contact', {
            name: req.body.teacher_name,
        });
    } catch (error) {
        console.error(error);
        res.render('error', {
            errorMsg: error.message,
        });
    }
};
