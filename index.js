var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');
var config = require('controllers/profileCtrl.js');
var config = require('controllers/userCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'));

app.get('/api/profiles', profileCtrl.getFriends);
app.post('/api/login', usersCtrl.login);

var port = 3000;
app.listen(port, function(){
  console.log("Listening on port ", port);
});

var corsOptions = {
    origin: 'http://localhost:3000  '
};
