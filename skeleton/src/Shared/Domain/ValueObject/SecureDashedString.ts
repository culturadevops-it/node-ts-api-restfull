import BadRequestException from '../Exception/BadRequestException';

class SecureDashedString {
    public static MESSAGE: string =
        'invalid SecureDashedString, only start letters, number too and dash(-) as separator, must be end and start with letters, all lowercase';

    constructor(public readonly value: string) {
        this.validateOrThrowException();
    }

    private validateOrThrowException(): void {
        const regexp = new RegExp(/^[a-z]+(?:\-[a-z,0-9]+)*$/);
        if (regexp.test(this.value)) return;

        throw new BadRequestException(`invalid SecureDashedString ${this.value}`);
    }

    protected throwException(): void {
        throw new BadRequestException(SecureDashedString.MESSAGE);
    }
}

export default SecureDashedString;
