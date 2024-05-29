import BadRequestException from '../Exception/BadRequestException';
import Base64Text from './Base64Text';

class Title extends Base64Text {
    public static MESSAGE: string = 'invalid title';

    protected throwException(): void {
        throw new BadRequestException(Title.MESSAGE);
    }
}

export default Title;
