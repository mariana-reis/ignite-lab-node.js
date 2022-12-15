import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';
import { PrismaService } from './../prisma.service';
import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notifications-repository"
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {
  }
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)
    
    await this.prismaService.notification.create({
      data: raw,
    })
  }
}