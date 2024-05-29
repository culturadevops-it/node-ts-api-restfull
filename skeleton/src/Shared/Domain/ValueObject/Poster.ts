import BadRequestException from '../Exception/BadRequestException';
import LimitedString from './LimitedString';

class Poster extends LimitedString {
    public static MESSAGE: string = 'invalid Poster';

    protected throwException(): void {
        throw new BadRequestException(`${Poster.MESSAGE} ${this.value}`);
    }
}

export default Poster;
