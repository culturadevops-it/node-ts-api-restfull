import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import FaqCreateRequest from '../../../Faq/Application/Create/FaqCreateRequest';
import FaqCreateService from '../../../Faq/Application/Create/FaqCreateService';
import FaqRepository from '../../../Faq/Domain/Persistence/FaqRepository';
import FaqRepositoryMariaDB from '../../../Faq/Infraestructure/Persistence/FaqRepositoryMariaDB';
import { ApiAction } from '../../../Shared/Infraestructure/ApiAction';

const repository: FaqRepository = new FaqRepositoryMariaDB();
const service: FaqCreateService = new FaqCreateService(repository);

export class FaqCreateAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const request: FaqCreateRequest = new FaqCreateRequest(uuidv4(), req.body.title, req.body.description);

            await service.execute(request);

            res.status(HttpStatusCode.Created).send();
        } catch (error) {
            res.status(HttpStatusCode.BadRequest).send((<Error>error).message);
        }
    }
}
