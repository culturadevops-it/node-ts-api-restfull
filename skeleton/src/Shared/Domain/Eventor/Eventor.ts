import DomainEvent from './DomainEvent';

interface Eventor {
    publish(event: DomainEvent): Promise<void>;
}

export default Eventor;
