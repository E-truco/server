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

app.use(express.static('public'))

// I'm not exactly sure about this one, but I know everything will go inside here
io.on("connection", (socket) => {

    // this will log the client's ID
    console.log(socket.id);



    socket.on('joinRoom', (data) =>{

        console.log(data)

        const user = usersHandler.userJoin(socket.id, data.username, data.room)

        socket.join(user.room)

        socket.broadcast.to(user.room).emit('consoleMessage', new ConsoleMessage('Server', `${data.username} has connected!`))
    })

    socket.on('disconnect', () => {

        const user = usersHandler.userLeave(socket.id)

        if(user){
            io.to(user.room).emit('consoleMessage', new ConsoleMessage('Server', `${user.username} has disconnected!`))
        }
    })


  });


// this will run the server
server.listen(PORT, () => {
    console.log(`Server is live on ${PORT}`)
})