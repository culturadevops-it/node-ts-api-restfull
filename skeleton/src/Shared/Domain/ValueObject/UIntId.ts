import BadRequestException from '../Exception/BadRequestException';

class UIntId {
    public static MESSAGE: string = 'invalid id, must be a positive decimal number';

    constructor(public readonly value: number) {
        this.validateOrThrowException();
    }

    private validateOrThrowException(): void {
        if (this.value > 0) {
            return;
        }

        this.throwException();
    }

    protected throwException(): void {
        throw new BadRequestException(`${UIntId.MESSAGE} ${this.value}`);
    }
}

export default UIntId;
