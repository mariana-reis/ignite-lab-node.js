import { Content } from "@app/entities/content";
import { Notification, INotificationProps } from "@app/entities/notification";

type Override = Partial<INotificationProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('nova notificação'),
    recipientId: 'recipient-2',
    ...override
  });
}