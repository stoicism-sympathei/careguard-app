const socket = new WebSocket('ws://localhost:3000'); 

// Create a WebSocket connection
const socket = new WebSocket(websocketURL);

// Event listener for when the connection is opened
socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened:', event);

    // You can send data to the WebSocket server here if needed
    // For example:
    // socket.send('Hello, WebSocket Server!');
});

// Event listener for when a message is received from the WebSocket server
socket.addEventListener('message', (event) => {
    console.log('Message received from WebSocket server:', event.data);

    // Handle the received message here
});

// Event listener for when an error occurs
socket.addEventListener('error', (event) => {
    console.error('WebSocket error:', event);
});

// Event listener for when the connection is closed
socket.addEventListener('close', (event) => {
    if (event.wasClean) {
        console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
    } else {
        console.error('WebSocket connection abruptly closed');
    }
});

