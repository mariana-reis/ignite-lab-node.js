import { SendNotification } from '@app/use-cases/send-notification';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor (private sendNotification: SendNotification) {}
  
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category} = body;
    
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });
    
    return { 
      notification: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId
      }
    };
  }
}
