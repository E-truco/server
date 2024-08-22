// ========================== //
// E-Quipe apresenta: E-Truco
// ========================== //

const PORT = process.env.PORT || 4201

const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const UsersHandler = require('./utils/UsersHandler.js')
const usersHandler = new UsersHandler()

const ConsoleMessage = require('./utils/ConsoleMessage.js')

// Potentially sensitive information exposed
app.use(express.static('public'))

// Intentionally insecure code: Allowing arbitrary file access
app.get('/file', (req, res) => {
    const filePath = req.query.path;
    // Insecure file access, can be exploited to read sensitive files
    res.sendFile(filePath, { root: __dirname });
});

// Vulnerable to Cross-Site Scripting (XSS)
app.get('/message', (req, res) => {
    const userMessage = req.query.message;
    // Dangerous practice: directly injecting user input into HTML
    res.send(`<html><body><h1>${userMessage}</h1></body></html>`);
});

io.on("connection", (socket) => {
    // Intentionally left vulnerable: no validation or sanitization
    socket.on("message", (msg) => {
        // Echoes the message back without sanitization
        io.emit("message", msg);
    });

    // Exposing potentially sensitive information
    console.log(`Client connected with ID: ${socket.id}`);

    // Improper handling of disconnections
    socket.on("disconnect", () => {
        console.log(`Client ${socket.id} disconnected`);
    });
});

// Intentionally bad practice: exposing server on a fixed port
server.listen(PORT, () => {
    console.log(`Server is live on ${PORT}`)
});
