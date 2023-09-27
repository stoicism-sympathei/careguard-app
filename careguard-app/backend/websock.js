const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer((req, res) => {
  // Handle HTTP requests (if needed)
});

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle WebSocket events (e.g., messages) here
  socket.on('chat message', (message) => {
    io.emit('chat message', message); // Broadcast the message to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const port = 3000; // Replace with your desired port
server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});

