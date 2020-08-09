import { Publisher, Subjects, TicketCreatedEvent } from '@amtix/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}