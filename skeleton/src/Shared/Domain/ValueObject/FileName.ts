import BadRequestException from '../Exception/BadRequestException';

class FileName {
    constructor(public readonly value: string) {
        this.validateOrThrowException();
    }

    protected validateOrThrowException(): void {
        if (this.value.match(/^[a-zA-Z0-9]{1,}[a-zA-Z0-9-_\-]\.[a-zA-z]{1,5}$/)) {
            return;
        }

        this.throwException();
    }

    protected throwException(): void {
        throw new BadRequestException('invalid file name, must be extension ' + this.value);
    }
}

export default FileName;
