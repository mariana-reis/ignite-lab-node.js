import { Notification } from './../entities/notification';

// interface that tells which method should exist in our repository 
// but doesn't implement the methods

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}