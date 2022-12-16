import { CountRecipientNotifications } from './count-recipient-notifications';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { Notification } from '@app/entities/notification'
import { Content } from '@app/entities/content'


describe('Count recipient Notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository
    )
        
    notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('nova notificação'),
        recipientId: 'recipient-1'
      })
    );
    
    notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('nova notificação'),
        recipientId: 'recipient-1'
      })
    );
    
    notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('nova notificação'),
        recipientId: 'recipient-2'
      })
    );
    
    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1'
    })
    
    expect(count).toEqual(2);
  }) 
  
 
  })
