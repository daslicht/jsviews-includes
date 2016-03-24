var express = require('express');
var app = express();
var http = require('http').Server(app);
var jsrender = require('jsrender');
var errorhandler = require('errorhandler');

app.use('development', function () {
    app.use(errorhandler());
});


app.engine('html', jsrender.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/templates'); // Folder location for JsRender templates for Express

jsrender.views.settings.debugMode(true);
console.log('env:', process.env.NODE_ENV);

console.log('js views debug mode: ', jsrender.views.settings.debugMode()); // false by default)


app.get('/', function (req, res) {

        // var tmpl = jsrender.templates('../footer.html'); // Compile the template
        // var html = tmpl({ name: "Jim" });
        // res.send(html);
        res.render('layout', function(err, html) {
            res.send(err ? jsrender.views.converters.html(err.message) : html); // HTML encode message
        });
});


app.use(express.static('/public'));

http.listen('3000', function () {
    console.log('Express Listening at Port: 3000 ');
});
