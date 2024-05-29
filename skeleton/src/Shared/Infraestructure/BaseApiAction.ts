import { HttpStatusCode } from 'axios';
import { Response } from 'express';
import PrimitiveType from '../Domain/Model/PrimitiveType';

class BaseApiAction {
    async success(res: Response, result: PrimitiveType): Promise<void> {
        res.status(HttpStatusCode.Ok).json({
            success: true,
            result: result,
        });
    }

    async failed(res: Response, error: Error): Promise<void> {
        res.status(HttpStatusCode.BadRequest).json({
            success: false,
            result: (<Error>error).message,
        });
    }
}

export default BaseApiAction;
