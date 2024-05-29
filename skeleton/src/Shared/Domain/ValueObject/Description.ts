import BadRequestException from '../Exception/BadRequestException';
import Base64Text from './Base64Text';

class Description extends Base64Text {
    public static MESSAGE: string = 'invalid Description';

    protected throwException(): void {
        throw new BadRequestException(Description.MESSAGE);
    }
}

export default Description;
