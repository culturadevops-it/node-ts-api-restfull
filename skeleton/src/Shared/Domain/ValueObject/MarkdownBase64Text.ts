import BadRequestException from '../Exception/BadRequestException';
import Base64Text from './Base64Text';

class MarkdownBase64Text extends Base64Text {
    public static MESSAGE: string = 'invalid base64 markdown';

    constructor(readonly value: string) {
        super(value);
    }

    public getCleanDecoded(): string | undefined {
        try {
            return this.decoded()?.replaceAll('<a name=', '<a id=');
        } catch (error) {
            this.throwException();
        }
    }

    protected throwException(): void {
        throw new BadRequestException(MarkdownBase64Text.MESSAGE);
    }
}

export default MarkdownBase64Text;
