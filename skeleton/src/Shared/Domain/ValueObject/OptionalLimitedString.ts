import BadRequestException from '../Exception/BadRequestException';

class OptionalLimitedString {
    public static MINIMUM_LENGTH: number = 0;
    public static MAXIMUM_LENGTH: number = 255;

    constructor(
        public readonly value: string,
        public readonly minimum: number = OptionalLimitedString.MINIMUM_LENGTH,
        public readonly maximum: number = OptionalLimitedString.MAXIMUM_LENGTH,
    ) {
        this.validateOrThrowException();
    }

    private validateOrThrowException(): void {
        if ((this.value.length >= this.minimum && this.value.length <= this.maximum) || this.value === undefined) {
            return;
        }

        this.throwException();
    }

    protected throwException(): void {
        throw new BadRequestException(
            `value must be between ${OptionalLimitedString.MINIMUM_LENGTH} and ${OptionalLimitedString.MAXIMUM_LENGTH} chars length, your value its not valid: ${this.value}`,
        );
    }
}

export default OptionalLimitedString;
