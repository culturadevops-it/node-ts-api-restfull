class FaqCreateRequest {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
    ) {}
}

export default FaqCreateRequest;
