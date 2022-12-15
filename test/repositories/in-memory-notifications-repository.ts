import { Notification } from "@app/entities/notification"
import { NotificationsRepository } from "@app/repositories/notifications-repository"


// create repository fake
export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = []

    async create(notification: Notification) {
      this.notifications.push(notification)
    }
}