var app = require('express')();
var http = require('http').createServer(app);
var bodyParser = require('body-parser')
var cors = require('cors')
var io = require('socket.io')(3000);

app.use(bodyParser.json())

app.use(cors())

http.listen(3001, function(){
  console.log('listening on *:3001');
});

io.set('origins', '*:*');

io.on('connection', function (socket) {
  socket.on('new_user', msg => {
    console.log(msg.preferences)
    msg.preferences.forEach(room => {
      socket.join(room)
      io.in(room).emit('new_user_ack', room)
    });
  })
  socket.on('disconnect', function () { });
});

 app.post('/:room', function(req, res){
    console.log(req.body.score)
    io.in(req.params.room).emit('update', req.body)
    res.json(req.body)
  });
