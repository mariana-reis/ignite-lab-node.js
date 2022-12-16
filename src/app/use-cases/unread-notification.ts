import { NotificationNotFound } from './errors/notification-not-found';
import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from '../repositories/notifications-repository'

interface IUnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void

@Injectable()
export class UnreadNotification {
  constructor(private notificationsRepository: NotificationsRepository){}

  async execute(request:IUnreadNotificationRequest): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;
    
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );
    
    if(!notification) {
      throw new NotificationNotFound();
    }
    
    notification.unread();
    
    await this.notificationsRepository.save(notification);
  }
}