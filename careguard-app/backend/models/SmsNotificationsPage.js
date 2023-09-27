const socket = new WebSocket('wss://localhost:3000/');

// WebSocket event listeners
socket.addEventListener('open', (event) => {
  console.log('WebSocket connection opened:', event);
});

socket.addEventListener('message', (event) => {
  console.log('Message from server:', event.data);
});

socket.addEventListener('close', (event) => {
  console.log('WebSocket connection closed:', event);
});

socket.addEventListener('error', (event) => {
  console.error('WebSocket error:', event);
});

