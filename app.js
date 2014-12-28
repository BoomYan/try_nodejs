var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(1234);

//app.get('/', );

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

//event listener 
io.on('connection', function (socket) {

	var obj = {
		'hello': 'world'
	};
  socket.emit('news', obj);

  socket.on('my other event', function (data) {
    console.log(data);
  });

  socket.on('wtf', function(data){
  	console.log(socket.id);
  	socket.broadcast.emit('wtf', data);
  });

});