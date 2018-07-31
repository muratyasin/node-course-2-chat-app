

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

    var li = jQuery('<li></li)>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
  });

  // socket.emit('createMessage',{
  //   from : 'Frank',
  //   text: 'Hi'
  // }, function(data){
  //   console.log('got it',data);
  // });

  jQuery('#message-form').on('submit', function(e){
    e.preventDefault();
    socket.emit('createMessage', {
      from: 'User',
      text: jQuery('[name=message]').val()
    }, function() {

    });
  })
