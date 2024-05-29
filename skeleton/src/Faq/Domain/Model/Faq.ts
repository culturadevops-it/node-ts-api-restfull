import ToPrimitiveTypeResult from '../../../Shared/Domain/Model/DomainModel';
import Id from '../../../Shared/Domain/ValueObject/Id';
import Namespace from '../../../Shared/Domain/ValueObject/Namespace';
import SecureString from '../ValueObject/SecureString';
import FaqType from './FaqType';

class Faq implements ToPrimitiveTypeResult {
    private constructor(
        public readonly id: Id,
        public readonly title: Namespace,
        public readonly description: SecureString,
        public readonly createdAt: Date,
    ) {}

    public static create(id: Id, title: Namespace, description: SecureString, createdAt?: Date): Faq {
        let created: Date = new Date();
        if (createdAt !== undefined) {
            created = createdAt;
        }

        return new Faq(id, title, description, created);
    }

    public toPrimitives(): FaqType {
        return {
            id: this.id.value,
            title: this.title.value,
            description: this.description.value,
            createdAt: this.createdAt,
        };
    }
}

export default Faq;
