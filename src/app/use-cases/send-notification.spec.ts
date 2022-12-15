import { Notification } from './../entities/notification';
import { SendNotification } from "./send-notification"
const notifications: Notification[] = []
// create repository fake
const notificationsRepository = {
    async create(notification: Notification) {
      notifications.push(notification)
    }
}

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository)
    
    await sendNotification.execute({
      content:'this is a notification',
      category: 'social',
      recipientId: 'exemple-recipientId'
    })
    
    console.log(notifications)
    expect(notifications).toHaveLength(1)
  })
})