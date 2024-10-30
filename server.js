const express = require('express');

const app = express();
const PORT = 8001;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle login data
app.post('/collect', (req, res) => {
    const { username, password } = req.body;

    // Basic validation
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    // Log the received data
    console.log(`Received login attempt: Username - ${username}, Password - ${password}`);

    // Dummy login validation
    if (username === 'testuser' && password === 'password123') {
        res.json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ error: 'Invalid username or password.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
