// ===================================================== //
// E-Quipe apresenta: E-Truco | Client Testing Interface
// ===================================================== //

const { io } = require("socket.io-client")

// server URL goes inside the io()
const socket = io()


// this will log the client's ID when connecting to the server
socket.on("connect", () => {
    console.log(socket.id)
});

// this is just to make sure we are actually disconnecting, socket.id should be undefined
socket.on("disconnect", () => {
    console.log(socket.id)
});