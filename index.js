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

app.use(express.static('public'))

// I'm not exactly sure about this one
io.on("connection", (socket) => {
    
    // this will log the client's ID
    console.log(socket.id);
  });


// this will run the server
server.listen(PORT, () => {
    console.log(`Server is live on ${PORT}`)
})