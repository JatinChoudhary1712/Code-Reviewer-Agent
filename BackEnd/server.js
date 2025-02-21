require('dotenv').config();
const app = require('./src/app');
const cors = require('cors'); // Added CORS to allow frontend requests

app.use(cors()); // Enable CORS for all routes

const PORT = process.env.PORT || 5000; // Changed port for better separation from frontend

app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}/`);
});
