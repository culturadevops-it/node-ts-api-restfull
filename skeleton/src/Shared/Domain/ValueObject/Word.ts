import BadRequestException from '../Exception/BadRequestException';

class Word {
    public static MINIMUM_LENGTH: number = 2;
    public static MAXIMUM_LENGTH: number = 15;
    public static MESSAGE: string =
        'invalid word, start letter, only letters and numbers,  limit 2-15 lowercase letters';

    constructor(public readonly value: string) {
        this.validateOrThrowException();
    }

    protected throwException(): void {
        throw new BadRequestException(`${Word.MESSAGE}  ${JSON.stringify(this.value)}`);
    }

    private validateOrThrowException(): void {
        /* eslint-disable no-useless-escape */
        const regexp = new RegExp(/^[a-z][a-z0-9]{0,13}[a-z0-9]$/);
        regexp.test(this.value) === false && this.throwException();
    }
}

export default Word;
