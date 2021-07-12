// require dependencies
 // express
const express = require('express')
const app = express()
 // socket.io
const server = require('http').Server(app)
const io = require('socket.io')(server)
 // peerjs
const { ExpressPeerServer } = require('peer')
const peerServer = ExpressPeerServer(server, {
    debug: true
})
 // uuid- to generate random ids
const { v4: uuidV4 } = require('uuid')

// setup peer server
app.use('/peerjs', peerServer)

// setup express server
 // render views using ejs library
app.set('view engine', 'ejs')
 // setup static folder for JavaScript & CSS - public folder
app.use(express.static('public'))

// get route
app.get('/', (req, res) => {
    // create a room and redirect the user to that room
    res.redirect(`/${uuidV4()}`)
})

// create rooms
app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
})

// socket.io- runs everytime there is a connection on the web page
io.on('connection', socket => {
    // setup events listeners
    socket.on('join-room', (roomId, userId, userName) => {
        // user connected
        socket.join(roomId)
        socket.broadcast.to(roomId).emit('user-connected', userId)

        // messages
        socket.on('message', (message) => {
            //send message to the same room
            io.to(roomId).emit('createMessage', message, userName)
        })

        // when user disconnects
        socket.on('disconnect', () => {
            socket.broadcast.to(roomId).emit('user-disconnected', userId)
        })
    })
})

// start up the server to view it
const port = process.env.PORT || 3000

server.listen(port, () => console.log(`Server Started on ${port}`))