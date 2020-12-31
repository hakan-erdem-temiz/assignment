var { producer } = require('../services/kafka-server');
const topic = require('config').get('kafka.kafka_topic1');
// create number
exports.numberGenerator = () => {

  //The maximum is exclusive and the minimum is inclusive so max is 128
  // 8-bit signed integer can represent both negative and positive values in the range -128 to 127.
  producer.on('ready', function () {
    setInterval(() => {
      const data = getRandomInt(-128, 128);
      payloads = [{ topic, messages: data }];
      producer.send(payloads, function (err, data) {
        console.log(data, 'numberGenerator sended');
      });
    }, 1000);
  });
};


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
