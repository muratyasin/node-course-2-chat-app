

  var socket = io();

  socket.on('connect', function (){
    console.log('Connected to the server');

    // socket.emit('createEmail', {
    //   to:'jen@ecample.com',
    //   text:'Hey it is Murat'
    // });

    // socket.emit('createMessage', {
    //   from:'jen@ecample.com',
    //   text:'Hey it is Murat',
    //   createdAt:324234
    // });
  });

  socket.on('disconnect', function () {
    console.log('Disconnected from  server');
  });

  socket.on('newEmail', function(email) {
    console.log('New email', email);
  });

  socket.on('newMessage', function(message) {
    console.log('New message', message);
  });
