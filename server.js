// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the public directory
app.use(express.static('public'));

// Handle socket.io connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Example: Send a sample sensor reading every second
    setInterval(() => {
        const sensorData = {
            sensorId: 'sensor1',
            value: Math.random() * 100, // Random value for demonstration
            timestamp: new Date().toISOString()
        };
        socket.emit('sensorData', sensorData);
    }, 1000);

    // Example: Handle command to physical asset
    socket.on('commandAsset', (command) => {
        console.log('Command received:', command);
        // Code to send command to physical asset
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
