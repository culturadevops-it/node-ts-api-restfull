import BadRequestException from '../Exception/BadRequestException';

class Url {
    constructor(public readonly value: string) {
        this.validateOrThrowException();
    }

    protected throwException(): void {
        throw new BadRequestException(`invalid url ${this.value}`);
    }

    private validateOrThrowException(): void {
        try {
            new URL(this.value);
        } catch (error) {
            this.throwException();
        }
    }
}

export default Url;
