import { Kafka } from "kafkajs"
import { randomUUID} from "node:crypto"

async function bootstrap() {
  const kafka = new Kafka({
      clientId: 'kafka-producer',
      brokers: ['helped-coral-14681-us1-kafka.upstash.io:9092'],
      sasl: {
        mechanism: 'scram-sha-256',
        username: 'aGVscGVkLWNvcmFsLTE0NjgxJAoS7cG6lO_0kG7cQrhSLxkhwjWMm9hA3Z0MCf4',
        password: '**********',
      },
      ssl: true,
  })
  
  const producer = kafka.producer()

  
  await producer.connect()
  await producer.send({
    topic: 'notifications.send-notification',
    messages: [ 
      {
        value: JSON.stringify({
          content:'Nova solicitação de amizade!',
          category: 'social',
          recipientId: randomUUID(),
        })
      },
    ],
  })
  
  await producer.disconnect()
}

bootstrap()