import BadRequestException from '../Exception/BadRequestException';

class Props {
    public readonly isEmpty: boolean;
    public readonly items: {
        key: string;
        type: string;
        required: boolean;
    }[] = [];
    constructor(public readonly value: string = '') {
        this.validateOrThrowException();
        this.isEmpty = '' === this.value;
    }

    public getProp(key: string):
        | {
              key: string;
              type: string;
              required: boolean;
          }
        | undefined {
        return this.items.find((item) => item.key === key);
    }

    private validateOrThrowException(): void {
        const splitedProps: string[] = this.value.split(',');
        if (splitedProps.length === 0) {
            return;
        }

        splitedProps.forEach((item) => {
            const itemsProp: string[] = item.split(':');
            if (itemsProp.length !== 2) {
                return;
            }

            const optionsEreg = /([^[\]]+)(?:\[([^\]]+)\])?/;
            const options = itemsProp[1].match(optionsEreg);
            if (options!.length < 3) {
                return;
            }

            this.items.push({
                key: itemsProp[0],
                type: options![1],
                required: options![2] === 'required',
            });
        });
    }

    protected throwException(): void {
        throw new BadRequestException(`invalid props, your value its not valid: ${this.value}`);
    }
}

export default Props;
