import { Request, Response } from 'express';
import FaqDeleteRequest from '../../../Faq/Application/Delete/FaqDeleteRequest';
import FaqDeleteService from '../../../Faq/Application/Delete/FaqDeleteService';
import FaqRepository from '../../../Faq/Domain/Persistence/FaqRepository';
import FaqRepositoryMariaDB from '../../../Faq/Infraestructure/Persistence/FaqRepositoryMariaDB';
import { ApiAction } from '../../../Shared/Infraestructure/ApiAction';
import BaseApiAction from '../../../Shared/Infraestructure/BaseApiAction';

const repository: FaqRepository = new FaqRepositoryMariaDB();
const service: FaqDeleteService = new FaqDeleteService(repository);

export class FaqDeleteAction extends BaseApiAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const request: FaqDeleteRequest = new FaqDeleteRequest(req.params.id);

            await service.execute(request);

            this.success(res, 'Faq deleted successfully.');
        } catch (error) {
            this.failed(res, error as Error);
        }
    }
}
