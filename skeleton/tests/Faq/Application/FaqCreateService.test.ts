import FaqCreateRequest from '../../../src/Faq/Application/Create/FaqCreateRequest';
import FaqCreateResponse from '../../../src/Faq/Application/Create/FaqCreateResponse';
import FaqCreateService from '../../../src/Faq/Application/Create/FaqCreateService';
import SecureString from '../../../src/Faq/Domain/ValueObject/SecureString';
import BadRequestException from '../../../src/Shared/Domain/Exception/BadRequestException';
import Namespace from '../../../src/Shared/Domain/ValueObject/Namespace';
import { SharedMother } from '../../Shared/SharedMother';
import FaqMother from '../FaqMother';
import FaqRepositorySpyDummy from './FaqRepositorySpyDummy';

const respository: FaqRepositorySpyDummy = new FaqRepositorySpyDummy();
const sut: FaqCreateService = FaqMother.FaqCreateService(respository);
const request: FaqCreateRequest = FaqMother.FaqCreateRequest();

describe('FaqCreateService', () => {
    it('should create a faq', async () => {
        await sut.execute(request);

        expect(respository.createHaveBeenCalledWith(request)).toBeTruthy();
    });

    it('shoud result a response with create faq id', async () => {
        const result: FaqCreateResponse = await sut.execute(request);

        expect(result.id).toStrictEqual(SharedMother.VALID_ID);
    });

    it('shoud result an error on invalid id', async () => {
        try {
            await sut.execute(FaqMother.FaqCreateRequest('invalid-id'));
        } catch (err) {
            expect(err).toBeInstanceOf(BadRequestException);
        }
    });

    it('shoud result an error on invalid title', async () => {
        try {
            await sut.execute(FaqMother.FaqCreateRequest(undefined, 'a'));
        } catch (err) {
            expect(err).toBeInstanceOf(BadRequestException);
            expect((err as BadRequestException).message).toMatch(Namespace.MESSAGE);
        }
    });

    it('shoud result an error on invalid description', async () => {
        try {
            await sut.execute(FaqMother.FaqCreateRequest(undefined, undefined, 'a'));
        } catch (err) {
            expect(err).toBeInstanceOf(BadRequestException);
            expect((err as BadRequestException).message).toMatch(SecureString.MESSAGE);
        }
    });
});
