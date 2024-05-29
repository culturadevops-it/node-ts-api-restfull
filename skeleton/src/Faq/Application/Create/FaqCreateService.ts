import Id from '../../../Shared/Domain/ValueObject/Id';
import Namespace from '../../../Shared/Domain/ValueObject/Namespace';
import Faq from '../../Domain/Model/Faq';
import FaqRepository from '../../Domain/Persistence/FaqRepository';
import SecureString from '../../Domain/ValueObject/SecureString';
import FaqCreateRequest from './FaqCreateRequest';
import FaqCreateResponse from './FaqCreateResponse';

class FaqCreateService {
    constructor(private readonly repository: FaqRepository) {}

    async execute(request: FaqCreateRequest): Promise<FaqCreateResponse> {
        const faq: Faq = this.createFaqFromRequest(request);

        await this.repository.create(faq);

        return new FaqCreateResponse(faq.id.value);
    }

    private createFaqFromRequest(request: FaqCreateRequest): Faq {
        return Faq.create(new Id(request.id), new Namespace(request.title), new SecureString(request.description));
    }
}

export default FaqCreateService;
