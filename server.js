
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var mongoose = require('./config/mongoose'),
  express = require('./config/express');

var PORT = process.env.PORT || 3000;

var db = mongoose();
var app = express();
app.listen(PORT);
module.exports = app;

console.log('Server running at port ' + PORT + '!');
