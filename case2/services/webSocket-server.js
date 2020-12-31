var WebSocketServer = require('websocket').server;
var http = require('http');
var { consumer } = require('./kafka-server')

//  combine the Kafka consumer and the WebSocket API to play together and return data coming from Kafka producer.
var server = http.createServer(function (request, response) {
  console.log(' Request recieved : ' + request.url);
  response.writeHead(404);
  response.end();
});
server.listen(8080, function () {
  console.log('Listening on port : 8080');
});

webSocketServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false,
});

function iSOriginAllowed(origin) {
  return true;
}

webSocketServer.on('request', function (request) {
  if (!iSOriginAllowed(request.origin)) {
    request.reject();
    console.log(' Connection from : ' + request.origin + ' rejected.');
    return;
  }

  var connection = request.accept('echo-protocol', request.origin);
  console.log(' Connection accepted : ' + request.origin);

  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      console.log('Received Message: ' + message.utf8Data);
    }
  });

  consumer.on('message', function (message) {
    console.log(message);
    connection.sendUTF(message.value);
  });

  connection.on('close', function (reasonCode, description) {
    console.log('Connection ' + connection.remoteAddress + ' disconnected.');
  });
});
