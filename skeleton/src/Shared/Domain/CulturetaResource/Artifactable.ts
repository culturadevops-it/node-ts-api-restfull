import DomainEvent from '../Eventor/DomainEvent';

interface Artifactable {
    getSpec(): {};
    publish(event: DomainEvent): Promise<void>;
}

export default Artifactable;
