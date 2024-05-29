import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import FaqListRequest from '../../../Faq/Application/List/FaqListRequest';
import FaqListResponse from '../../../Faq/Application/List/FaqListResponse';
import FaqListService from '../../../Faq/Application/List/FaqListService';
import FaqRepository from '../../../Faq/Domain/Persistence/FaqRepository';
import FaqRepositoryMariaDB from '../../../Faq/Infraestructure/Persistence/FaqRepositoryMariaDB';
import { ApiAction } from '../../../Shared/Infraestructure/ApiAction';

const repository: FaqRepository = new FaqRepositoryMariaDB();
const service: FaqListService = new FaqListService(repository);

export class FaqListAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const request: FaqListRequest = new FaqListRequest((req.query.pattern as string) || '');
            const response: FaqListResponse = await service.execute(request);

            res.status(HttpStatusCode.Ok).send(response.toPrimitives());
        } catch (error) {
            res.status(HttpStatusCode.BadRequest).send((<Error>error).message);
        }
    }
}
