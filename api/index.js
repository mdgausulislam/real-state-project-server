const connectDatabase = require("./config/db");
const port = process.env.PORT || 5000;
const express = require('express');
const app = require("./app");

const path = require('path');

app.use(express.static(path.join(__dirname, '/Client/dist')));

// Route for all other requests - Send index.html for client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Client', 'dist', 'index.html'));
});

app.listen(port, async() => {
    console.log(`real-state server running port: ${port}`);
    await connectDatabase();
})