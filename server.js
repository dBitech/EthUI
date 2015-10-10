var express = require('express');
var app        =    express();

app.use(express.static(__dirname + '/public'));

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000,function(){
console.log("woooo");
});


