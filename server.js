var express = require('express');
var app = express();

app.use(express.static('dist'));

app.listen(1020, function() {
    console.log('EchoUa trail test on the url localhost:1020');
});
