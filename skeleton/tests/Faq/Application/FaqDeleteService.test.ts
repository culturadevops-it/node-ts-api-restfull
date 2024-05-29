import FaqDeleteRequest from '../../../src/Faq/Application/Delete/FaqDeleteRequest';
import FaqDeleteService from '../../../src/Faq/Application/Delete/FaqDeleteService';
import BadRequestException from '../../../src/Shared/Domain/Exception/BadRequestException';
import FaqMother from '../FaqMother';
import FaqRepositorySpyDummy from './FaqRepositorySpyDummy';

const respository: FaqRepositorySpyDummy = new FaqRepositorySpyDummy();
const sut: FaqDeleteService = FaqMother.FaqDeleteService(respository);
describe('FaqDeleteService', () => {
    it('should delete a faq with requested id', async () => {
        const request: FaqDeleteRequest = FaqMother.FaqDeleteRequest();

        await sut.execute(request);

        expect(respository.deleteHaveBeenCalledWith(request.id)).toBeTruthy();
    });

    it('should throw an error on invalid requested id', async () => {
        try {
            await sut.execute(FaqMother.FaqDeleteRequest('non-valid-id'));
        } catch (error) {
            expect(error).toBeInstanceOf(BadRequestException);
        }
    });
});
