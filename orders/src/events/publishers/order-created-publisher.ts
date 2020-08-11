import { Publisher, OrderCreatedEvent, Subjects } from '@amtix/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}