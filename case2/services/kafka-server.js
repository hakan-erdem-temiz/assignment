var kafka = require('kafka-node'),
  client = new kafka.KafkaClient('localhost:9092');
const topic = require('config').get('kafka.kafka_topic1');

var Consumer = kafka.Consumer,
  consumer = new Consumer(
    client,
    [{ topic, partition: 0 }],
    {
      autoCommit: false,
    }
  );

//producers
var HighLevelProducer = kafka.HighLevelProducer,
  producer = new HighLevelProducer(client);


exports.producer = producer;
exports.consumer = consumer;
