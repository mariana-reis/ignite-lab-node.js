import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy 
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['helped-coral-14681-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'aGVscGVkLWNvcmFsLTE0NjgxJAoS7cG6lO_0kG7cQrhSLxkhwjWMm9hA3Z0MCf4',
          password: '**********',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
  
}