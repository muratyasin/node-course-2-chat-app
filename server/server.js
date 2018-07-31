const path = require('path');

const http = require('http');

const express=require('express');

const socketIO = require ('socket.io');

const {generateMessage} = require ('./utils/message');

const publicPath=path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

var app = express();

var server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
  console.log('New user connected');

  // socket.emit('newEmail', {
  //   from: 'mike@example.com',
  //   text:'What is going on',
  //   createAt: 123
  // });

  // socket.emit('newMessage', {
  //   from: 'mike@example.com',
  //   text:'What is going on',
  //   createAt: 123
  // });

  socket.emit('newMessage', generateMessage( 'Admin','Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin','A new user has joined'));

  socket.on('createMessage', (message)=>{
    console.log('createMessage', message);
    // io.emit('newMessage', { //It sends to message to every user
    //   from: message.from,
    //   text:message.text,
    //   createdAt: new Date().getTime()
    // });
    socket.broadcast.emit('newMessage', generateMessage(message.from,message.text)) ;//It sends to message to every user
    //   from: message.from,
    //   text:message.text,
    //   createdAt: new Date().getTime()
    // });
  });


  socket.on('disconnect', ()=>{
    console.log('User was disconnected');
  });

});

server.listen(port, ()=>{
  console.log(`Started up on ${port}`);
});
