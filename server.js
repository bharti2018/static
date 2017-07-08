var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
});

var server = app.listen(port, function () {
  //  var host = server.address().address
  //  var port = server.address().port

   console.log(`listening at http://%s:%s, ${port}`);

});
