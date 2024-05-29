import DomainEvent from '../Domain/Eventor/DomainEvent';
import Eventor from '../Domain/Eventor/Eventor';

class EventorService implements Eventor {
    constructor(private readonly endpoint: string) {}

    async publish(event: DomainEvent): Promise<void> {
        console.log('>---------------');
        console.log('> publish event');
        console.log('> endpoint: ' + this.endpoint);
        console.log(event);
        console.log('>---------------');
    }
}

export default EventorService;
