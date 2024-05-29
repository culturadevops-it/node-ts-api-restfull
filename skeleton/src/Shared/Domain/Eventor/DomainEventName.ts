import Namespace from '../ValueObject/Namespace';

class DomainEventName extends Namespace {
    public static MESSAGE: string =
        'invalid domain event name, only letters and dot(.) as separator, must be end and start with letters, all lowercase';
}

export default DomainEventName;
