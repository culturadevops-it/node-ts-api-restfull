import BadRequestException from '../Exception/BadRequestException';

class Namespace {
    public static MESSAGE: string =
        'invalid namespace, only letters and dot(.) as separator, must be end and start with letters, all lowercase';

    constructor(public readonly value: string) {
        this.validateOrThrowException();
    }

    private validateOrThrowException(): void {
        const regexp = new RegExp(/^[a-z]+(?:\.[a-z]+)*$/);
        if (regexp.test(this.value)) return;

        throw new BadRequestException(`invalid namespace ${this.value}`);
    }

    protected throwException(): void {
        throw new BadRequestException(Namespace.MESSAGE);
    }
}

export default Namespace;
