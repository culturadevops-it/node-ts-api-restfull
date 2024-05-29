import ToPrimitiveTypeResult from '../Model/DomainModel';
import Namespace from '../ValueObject/Namespace';
import SecureDashedString from '../ValueObject/SecureDashedString';

interface DomainEvent {
    getSource(): SecureDashedString;
    getEvent(): Namespace;
    getPayload(): ToPrimitiveTypeResult;
}

export default DomainEvent;
