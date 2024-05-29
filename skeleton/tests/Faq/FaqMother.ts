import FaqCreateRequest from '../../src/Faq/Application/Create/FaqCreateRequest';
import FaqCreateResponse from '../../src/Faq/Application/Create/FaqCreateResponse';
import FaqCreateService from '../../src/Faq/Application/Create/FaqCreateService';
import FaqDeleteRequest from '../../src/Faq/Application/Delete/FaqDeleteRequest';
import FaqDeleteService from '../../src/Faq/Application/Delete/FaqDeleteService';
import FaqListRequest from '../../src/Faq/Application/List/FaqListRequest';
import FaqListResponse from '../../src/Faq/Application/List/FaqListResponse';
import FaqListService from '../../src/Faq/Application/List/FaqListService';
import Faq from '../../src/Faq/Domain/Model/Faq';
import FaqRepository from '../../src/Faq/Domain/Persistence/FaqRepository';
import SecureString from '../../src/Faq/Domain/ValueObject/SecureString';
import { SharedMother } from '../Shared/SharedMother';

class FaqMother {
    public static FAQ_CREATED_AT: Date = new Date();
    public static FAQ_PATTERN: string = 'aaa';

    public static FaqListService(repository: FaqRepository): FaqListService {
        return new FaqListService(repository);
    }

    public static FaqDeleteService(repository: FaqRepository): FaqDeleteService {
        return new FaqDeleteService(repository);
    }

    public static FaqCreateService(repository: FaqRepository): FaqCreateService {
        return new FaqCreateService(repository);
    }

    public static FaqDeleteRequest(id?: string): FaqDeleteRequest {
        return new FaqDeleteRequest(id || SharedMother.VALID_ID);
    }

    public static FaqCreateResponse(): FaqCreateResponse {
        return new FaqCreateResponse(SharedMother.VALID_ID);
    }

    public static FaqListRequest(): FaqListRequest {
        return new FaqListRequest(FaqMother.FAQ_PATTERN);
    }

    public static FaqListResponse(): FaqListResponse {
        return new FaqListResponse([]);
    }

    public static FaqCreateRequest(id?: string, title?: string, description?: string): FaqCreateRequest {
        return new FaqCreateRequest(
            id ?? SharedMother.Id().value,
            title ?? SharedMother.BASE64_TEXT,
            description ?? SharedMother.BASE64_TEXT,
        );
    }

    public static FaqToCreate(): Faq {
        return Faq.create(SharedMother.Id(), SharedMother.Namespace(), FaqMother.SecureString());
    }

    public static FaqToRead(id?: string, title?: string, description?: string): Faq {
        return Faq.create(
            SharedMother.Id(id),
            SharedMother.Namespace(title),
            FaqMother.SecureString(description),
            FaqMother.FAQ_CREATED_AT,
        );
    }

    public static SecureString(value?: string): SecureString {
        return new SecureString(value !== undefined ? value : SharedMother.BASE64_TEXT);
    }
}

export default FaqMother;
