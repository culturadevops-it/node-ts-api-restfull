import BadRequestException from '../Exception/BadRequestException';

class Words {
    public static MINIMUM_LENGTH: number = 2;
    public static MAXIMUM_LENGTH: number = 15;
    public static MESSAGE: string =
        'invalid words, start letter, only letters and numbers,  limit 2-15 lowercase letters';

    constructor(public readonly value: string[]) {
        this.validateOrThrowException();
    }

    protected throwException(): void {
        throw new BadRequestException(`${Words.MESSAGE}  ${JSON.stringify(this.value)}`);
    }

    private validateOrThrowException(): void {
        if (this.value.length == 0) {
            this.throwException();
        }

        /* eslint-disable no-useless-escape */
        const regexp = new RegExp(/^[a-z][a-z0-9]{0,13}[a-z0-9]$/);
        this.value.forEach((status) => {
            regexp.test(status) === false && this.throwException();
        });
    }
}

export default Words;
