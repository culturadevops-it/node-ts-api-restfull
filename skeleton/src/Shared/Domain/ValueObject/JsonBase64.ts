import BadRequestException from '../Exception/BadRequestException';
import Base64Text from './Base64Text';

class JsonBase64 {
    constructor(public readonly value: any) {
        this.validateOrThrowException();
    }

    private validateOrThrowException(): void {
        new Base64Text(this.value);

        try {
            JSON.parse(atob(this.value));
        } catch {
            throw new BadRequestException(`invalid Json ${this.value}`);
        }
    }

    protected throwException(): void {
        throw new BadRequestException('invalid Json from base64');
    }
}

export default JsonBase64;
