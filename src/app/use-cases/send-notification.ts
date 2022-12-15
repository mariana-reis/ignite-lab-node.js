import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationsRepository } from '../repositories/notifications-repository'

interface ISendNotificationRequest {
  recipientId: string;
  content: string
  category: string
}

interface ISendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository){}

  async execute(request:ISendNotificationRequest): Promise<ISendNotificationResponse> {
    const { recipientId, content, category} = request;
    
    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    })
    
    // persist notification on base de dados fake
    await this.notificationsRepository.create(notification)
    
    
    return {
      notification
    };
  }
}