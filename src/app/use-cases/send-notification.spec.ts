import { SendNotification } from "./send-notification"

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification()
    
    const {notification} = await sendNotification.execute({
      content:'this is a notification',
      category: 'social',
      recipientId: 'exemple-recipientId'
    })
    
    expect(notification).toBeTruthy()
  })
})