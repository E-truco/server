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



server.listen(PORT, () => {
    console.log(`Server is live on ${PORT}`)
})