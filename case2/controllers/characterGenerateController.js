var { producer } = require('../services/kafka-server');
const topic = require('config').get('kafka.kafka_topic1');

// create character
exports.characterGenerator = () => {
  const alphabet = 'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ';

  producer.on('ready', function () {
    setInterval(() => {
      const data = alphabet[Math.floor(Math.random() * alphabet.length)];
      payloads = [{ topic, messages: data }];
      producer.send(payloads, function (err, data) {
        console.log(data, 'characterGenerator sended');
      });
    }, 2000);
  });
};
