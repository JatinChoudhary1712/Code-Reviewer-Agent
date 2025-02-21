const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json()); // Added to parse incoming JSON
app.use(cors()); // Added to allow frontend requests

app.get('/', (req, res) => {
    res.send('Hello, World! Backend is connected.');
});

app.use('/ai', aiRoutes);

module.exports = app;

