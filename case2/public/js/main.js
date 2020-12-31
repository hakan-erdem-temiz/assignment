$(document).ready(function () {

  const data = [];
  function webSocketInvoke() {
       document.getElementById('data').innerHTML = 'no data';
    if ('WebSocket' in window) {
      console.log('WebSocket is supported by your Browser!');
      var ws = new WebSocket('ws://localhost:8080/', 'echo-protocol');

      ws.onopen = function () {
        console.log('Connection created');
      };

      ws.onmessage = function (evt) {
        var received_msg = evt.data;
        data.push(received_msg);
        document.getElementById('data').innerHTML = data;

        console.log(received_msg);
      };

      ws.onclose = function () {
        console.log('Connection closed');
      };
    } else {
      alert('WebSocket NOT supported by your Browser!');
    }
  }
  webSocketInvoke();
});
