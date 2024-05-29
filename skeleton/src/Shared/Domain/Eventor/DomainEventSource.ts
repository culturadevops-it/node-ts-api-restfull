import SecureDashedString from '../ValueObject/SecureDashedString';

class DomainEventSource extends SecureDashedString {
    public static MESSAGE: string =
        'invalid domain event source, only start letters, number too and dash(-) as separator, must be end and start with letters, all lowercase';
}

export default DomainEventSource;
