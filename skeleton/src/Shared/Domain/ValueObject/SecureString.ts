import BadRequestException from '../Exception/BadRequestException';

class SecureString {
    public static MINIMUM_LENGTH: number = 2;
    public static MAXIMUM_LENGTH: number = 150;

    constructor(
        public readonly value: string,
        public readonly minimum: number = SecureString.MINIMUM_LENGTH,
        public readonly maximum: number = SecureString.MAXIMUM_LENGTH,
    ) {
        this.validateOrThrowException();
    }

    private validateOrThrowException(): void {
        const validLength: boolean =
            this.value.length >= SecureString.MINIMUM_LENGTH && this.value.length <= SecureString.MAXIMUM_LENGTH;
        const regexp = new RegExp(/^[a-zA-Z][-a-zA-Z0-9_ .]{0,148}[a-zA-Z0-9]$/);
        const isValid: boolean = validLength && regexp.test(this.value);
        if (isValid) return;

        throw new BadRequestException(`invalid name ${this.value}`);
    }

    protected throwException(): void {
        throw new BadRequestException(
            `name must contain only letters, start with letter:min${SecureString.MINIMUM_LENGTH}, spaces and end with letters:min${SecureString.MINIMUM_LENGTH} must be between ${SecureString.MINIMUM_LENGTH} and ${SecureString.MAXIMUM_LENGTH} chars length, your value its not valid: ${this.value}`,
        );
    }
}

export default SecureString;
