// ===================================================== //
// E-Quipe apresenta: E-Truco | Client Testing Interface
// ===================================================== //

const { io } = require("socket.io-client")

let username = 'tester'
let room = 'testing-facility'

// server URL goes inside the io()
const socket = io('http://10.199.10.203:4201/')

socket.emit('joinRoom', {username, room})

// this will log the client's ID when connecting to the server
socket.on("connect", () => {
    console.log(socket.id)
});

// this is just to make sure we are actually disconnecting, socket.id should be undefined
socket.on("disconnect", () => {
    console.log(socket.id)
});


socket.on('consoleMessage', (consoleMessage) => {

    console.log(`${consoleMessage.username}: ${consoleMessage.text}`)

})
