require('dotenv').config();
const WebSocket = require('ws');
const PORT = process.env.PORT || 5000
const wss = new WebSocket.Server({ port: PORT });
console.log("Running on port " + PORT);

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  ws.send('something');
});