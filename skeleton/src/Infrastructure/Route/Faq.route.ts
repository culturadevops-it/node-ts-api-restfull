import { Request, Response, Router } from 'express';
import { ApiAction } from '../../Shared/Infraestructure/ApiAction';
import { FaqCreateAction } from '../Api/Faq/FaqCreateAction';
import { FaqDeleteAction } from '../Api/Faq/FaqDeleteAction';
import { FaqListAction } from '../Api/Faq/FaqListAction';

export const register = (router: Router) => {
    router.get('/api/v1/___name___/faqs', (req: Request, res: Response) => {
        const feature: ApiAction = new FaqListAction();
        feature.execute(req, res);
    });
    router.post('/api/v1/___name___/faqs', (req: Request, res: Response) => {
        const feature: ApiAction = new FaqCreateAction();
        feature.execute(req, res);
    });
    router.delete('/api/v1/___name___/faqs/:id', (req: Request, res: Response) => {
        const feature: ApiAction = new FaqDeleteAction();
        feature.execute(req, res);
    });
};
