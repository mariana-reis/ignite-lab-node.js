import { SendNotification } from '@app/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { NotificationsController } from './kafka/controllers/notifications.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';
import { Module } from "@nestjs/common";

@Module({
  imports: [ DatabaseModule],
  providers: [
    KafkaConsumerService,
    SendNotification
  ],
  controllers: [NotificationsController]
})

export class MessagingModule {}