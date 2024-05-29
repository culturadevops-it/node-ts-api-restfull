import FaqCreateRequest from '../../../src/Faq/Application/Create/FaqCreateRequest';
import Faq from '../../../src/Faq/Domain/Model/Faq';
import FaqRepository from '../../../src/Faq/Domain/Persistence/FaqRepository';
import Id from '../../../src/Shared/Domain/ValueObject/Id';
import FaqMother from '../FaqMother';

class FaqRepositorySpyDummy implements FaqRepository {
    private lastPatternUsed: string | undefined;
    private lastCreated: Faq | undefined;
    private lastDeletedId: string | undefined;

    async list(pattern?: string | undefined): Promise<Faq[]> {
        this.lastPatternUsed = pattern;

        return [];
    }
    listHaveBeenCalledWith(pattern: string): boolean {
        return this.lastPatternUsed === pattern;
    }

    async delete(id: Id): Promise<void> {
        this.lastDeletedId = id.value;
    }

    deleteHaveBeenCalledWith(id: string): boolean {
        return this.lastDeletedId === id;
    }

    async get(id: Id): Promise<Faq> {
        return FaqMother.FaqToRead();
    }

    async create(faq: Faq): Promise<void> {
        this.lastCreated = faq;
    }

    createHaveBeenCalledWith(request: FaqCreateRequest): boolean {
        const idItsEquals = this.lastCreated?.id.value === request.id;
        const descriptionItsEquals = this.lastCreated?.description.value === request.description;
        const titleItsEquals = this.lastCreated?.title.value === request.title;

        return idItsEquals && descriptionItsEquals && titleItsEquals;
    }
}

export default FaqRepositorySpyDummy;
