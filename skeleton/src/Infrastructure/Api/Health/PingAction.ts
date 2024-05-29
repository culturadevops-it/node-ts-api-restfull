import { Request, Response } from 'express';
import HttpStatus from 'http-status';

export class PingAction implements PingAction {
    async execute(_req: Request, res: Response): Promise<void> {
        res.status(HttpStatus.OK).send('[Health.Action.Ping] ~ pong at ' + new Date());
    }
}
