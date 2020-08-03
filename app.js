var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

//fore controllers
todoController(app);

//listen to port
// app.listen(3000);
app.listen(process.env.PORT || 3000);
console.log('you are listen to port 3000');