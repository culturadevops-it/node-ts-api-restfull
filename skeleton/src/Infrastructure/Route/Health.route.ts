import { Request, Response, Router } from 'express';
import { ApiAction } from '../../Shared/Infraestructure/ApiAction';
import { PingAction } from '../Api/Health/PingAction';

export const register = (router: Router) => {
    const feature: ApiAction = new PingAction();
    router.get('/api/v1/___name___/health/ping', (req: Request, res: Response) => feature.execute(req, res));
};
