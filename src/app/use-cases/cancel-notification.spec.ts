import { NotificationNotFound } from './errors/notification-not-found'
import { CancelNotification } from './cancel-notification'
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { makeNotification } from '@test/factories/notification-factory'


describe('Cancel Notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const cancelNotification = new CancelNotification(notificationsRepository)
    
    const notification = makeNotification()
    
    notificationsRepository.create(notification);
    
    await cancelNotification.execute({
    notificationId: notification.id,
    })
    
    expect(notificationsRepository.notifications[0].cancelAt).toEqual(
      expect.any(Date)
    )
  }) 
  
  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const cancelNotification = new CancelNotification(notificationsRepository)
    
    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notificationId'
      });
    }).rejects.toThrow(NotificationNotFound);
    
  })
})