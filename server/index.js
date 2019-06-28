var app = require('express')();
var http = require('http').createServer(app);
var bodyParser = require('body-parser')
var cors = require('cors')
var io = require('socket.io')(3000);

app.use(bodyParser.json())

app.use(cors())

http.listen(3001, function(){
  console.log('listening on *:3000');
});

io.set('origins', '*:*');

io.on('connection', function (socket) {
  socket.on('greetings', msg => {
    console.log(msg)
    app.post('/', function(req, res){
      console.log(req.body)
      socket.broadcast.emit('new_score',req.body)
      res.json(req.body)
    });
  })
  socket.on('disconnect', function () { });
});
