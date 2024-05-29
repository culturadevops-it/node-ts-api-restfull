import FaqListResponse from '../../../src/Faq/Application/List/FaqListResponse';
import FaqListService from '../../../src/Faq/Application/List/FaqListService';
import FaqMother from '../FaqMother';
import FaqRepositorySpyDummy from './FaqRepositorySpyDummy';

const respository: FaqRepositorySpyDummy = new FaqRepositorySpyDummy();
const sut: FaqListService = FaqMother.FaqListService(respository);

describe('FaqListService', () => {
    it('shoud get an a list response', async () => {
        const result: FaqListResponse = await sut.execute(FaqMother.FaqListRequest());

        expect(respository.listHaveBeenCalledWith(FaqMother.FAQ_PATTERN)).toBeTruthy();
        expect(result).toBeInstanceOf(FaqListResponse);
    });
});
