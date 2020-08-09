import { Publisher, Subjects, TicketUpdatedEvent } from '@amtix/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}