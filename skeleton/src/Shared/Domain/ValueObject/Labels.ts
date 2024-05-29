import BadRequestException from '../Exception/BadRequestException';

class Labels {
    public static MINIMUM_LABEL_NAME_LENGTH: number = 3;
    public static MAXIMUM_LABEL_NAME_LENGTH: number = 20;

    constructor(
        public readonly value: string,
        public readonly minimum: number = Labels.MINIMUM_LABEL_NAME_LENGTH,
        public readonly maximum: number = Labels.MAXIMUM_LABEL_NAME_LENGTH,
    ) {
        this.validateOrThrowException();
    }

    private validateOrThrowException(): void {
        const labelsWithValues: string[] = this.value.split(',');
        if (labelsWithValues.length === 0) {
            this.throwException();
        }

        const labelValiator: RegExp = new RegExp(/^[a-z]{1}[a-z,0-9,-,_]{1,18}[a-z,0-9]{1}$/i);
        labelsWithValues.forEach((aLabelWithItsValue) => {
            const [aKey, aValue] = aLabelWithItsValue.split('=');
            if (
                aKey !== undefined &&
                aKey.length <= this.maximum &&
                aKey.length >= this.minimum &&
                labelValiator.test(aKey)
            ) {
                return;
            }

            this.throwException();
        });
    }

    toArray(): string[] {
        return this.value.split(',');
    }

    protected throwException(): void {
        throw new BadRequestException(
            `each tag must be between ${Labels.MINIMUM_LABEL_NAME_LENGTH} and ${Labels.MAXIMUM_LABEL_NAME_LENGTH} chars length, your value its not valid: ${this.value}`,
        );
    }
}

export default Labels;
