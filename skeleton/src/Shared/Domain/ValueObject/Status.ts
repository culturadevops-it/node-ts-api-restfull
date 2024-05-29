import BadRequestException from '../Exception/BadRequestException';
import Word from './Word';

class Status extends Word {
    private static readonly CREATED = 'created';
    private static readonly NOTIFIED = 'notified';
    private static readonly BUILDING = 'building';
    private static readonly FINISHED = `finished`;
    private static readonly FAILED = 'failed';

    private static STATUS: string[] = [
        Status.CREATED,
        Status.NOTIFIED,
        Status.BUILDING,
        Status.FINISHED,
        Status.FAILED,
    ];

    protected throwException(): void {
        throw new BadRequestException(
            `invalid status, only letters,  limit 2-15 lowercase letters  ${JSON.stringify(this.value)}`,
        );
    }
}

export default Status;
