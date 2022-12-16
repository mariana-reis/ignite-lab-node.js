import { UnreadNotification } from './unread-notification';
import { NotificationNotFound } from './errors/notification-not-found'
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { makeNotification } from '@test/factories/notification-factory'


describe('Unread Notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const unreadNotification = new UnreadNotification(notificationsRepository)
    
    const notification = makeNotification({
      readAt: new Date()
    })
    
    notificationsRepository.create(notification);
    
    await unreadNotification.execute({
    notificationId: notification.id,
    })
    
    expect(notificationsRepository.notifications[0].readAt).toBeNull()
  }) 
  
  it('should not be able to unread a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const unreadNotification = new UnreadNotification(notificationsRepository)
    
    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notificationId'
      });
    }).rejects.toThrow(NotificationNotFound);
    
  })
})