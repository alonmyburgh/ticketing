import { Publisher, OrderCancelledEvent, Subjects } from '@amtix/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}