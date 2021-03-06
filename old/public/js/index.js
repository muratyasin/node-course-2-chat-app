

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

  socket.on('newLocationMessage', function(message) {
    var li = jQuery('<li></li)>');
    var a=jQuery('<a target="_blank">My current location</a>');

    li.text(`${message.from}:`);
    a.attr('href', message.url);
    li.append(a);

    jQuery('#messages').append(li);
  });

  var messageTextbox= jQuery('[name=message]');
  jQuery('#message-form').on('submit', function(e){
    e.preventDefault();
    socket.emit('createMessage', {
      from: 'User',
      text: messageTextbox.val()
    }, function() {
    messageTextbox.val('')

    });
  });

  var locationButton=jQuery('#send-location');
  locationButton.on('click', function(){
    if (!navigator.geolocation) {
      return alert('geolocation is not supported by your browser');
    }

    navigator.geolocation.getCurrentPosition(function(position){
      socket.emit('createLocationMessage', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    }, function(){
      alert('Unable to fetch location');
    })
  })
