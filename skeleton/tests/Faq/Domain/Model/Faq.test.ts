import Faq from '../../../../src/Faq/Domain/Model/Faq';
import SecureString from '../../../../src/Faq/Domain/ValueObject/SecureString';
import BadRequestException from '../../../../src/Shared/Domain/Exception/BadRequestException';
import Id from '../../../../src/Shared/Domain/ValueObject/Id';
import Namespace from '../../../../src/Shared/Domain/ValueObject/Namespace';
import { SharedMother } from '../../../Shared/SharedMother';
import FaqMother from '../../FaqMother';

describe('Faq model', () => {
    it('should create statically to create new faq, created at will be generated', () => {
        const sut: Faq = FaqMother.FaqToCreate();

        expect(sut.title).toBeInstanceOf(Namespace);
        expect(sut.title.value).toStrictEqual(SharedMother.BASE64_TEXT);
        expect(sut.description).toBeInstanceOf(SecureString);
        expect(sut.description.value).toStrictEqual(SharedMother.BASE64_TEXT);
        expect(sut.createdAt).toBeInstanceOf(Date);
        expect(sut.id).toBeInstanceOf(Id);
        expect(sut.id.value).toStrictEqual(SharedMother.VALID_ID);
    });

    it('should create statically to read existing faq, created at its required', () => {
        const sut: Faq = FaqMother.FaqToRead();

        expect(sut.title).toBeInstanceOf(Namespace);
        expect(sut.title.value).toStrictEqual(SharedMother.BASE64_TEXT);
        expect(sut.description).toBeInstanceOf(SecureString);
        expect(sut.description.value).toStrictEqual(SharedMother.BASE64_TEXT);
        expect(sut.createdAt).toStrictEqual(FaqMother.FAQ_CREATED_AT);
        expect(sut.id.value).toStrictEqual(SharedMother.VALID_ID);
    });

    it('should throw a bad request exception on invalid title', () => {
        expect(() => {
            FaqMother.FaqToRead(undefined, 'a'.repeat(100));
        }).toThrow(BadRequestException);
    });

    it('should throw a bad request exception on invalid description', () => {
        expect(() => {
            FaqMother.FaqToRead(undefined, undefined, 'no base64 text');
        }).toThrow(BadRequestException);
    });

    it('should throw a bad request exception on invalid id', () => {
        expect(() => {
            FaqMother.FaqToRead('non-valid-id');
        }).toThrow(BadRequestException);
    });
});
