import PrimitiveType from '../../../Shared/Domain/Model/PrimitiveType';

interface FaqType extends PrimitiveType {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
}

export default FaqType;
