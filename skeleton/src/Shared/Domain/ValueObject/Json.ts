import BadRequestException from '../Exception/BadRequestException';

class Json {
    constructor(public readonly value: string) {
        this.validateOrThrowException();
    }

    private validateOrThrowException(): void {
        try {
            JSON.parse(this.value);
            return;
        } catch {}

        throw new BadRequestException(`invalid Json ${this.value}`);
    }

    protected throwException(): void {
        throw new BadRequestException(
            'invalid Json, only letters and dot(.) as separator, must be end and start with letters, all lowercase',
        );
    }
}

export default Json;
