var express = require('express');
var app = express();
var http = require('http').Server(app);
var jsrender = require('jsrender');
var errorhandler = require('errorhandler');
var browserify = require('browserify-middleware');
process.env.NODE_ENV = 'developement';

app.use('development', function() {
    app.use(errorhandler());
});

app.use(express.static('public'));

app.engine('html', jsrender.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/'); // Folder location for JsRender templates for Express
jsrender.views.settings.debugMode(true);
console.log('env:', process.env.NODE_ENV);

console.log('js views debug mode: ', jsrender.views.settings.debugMode()); // false by default)

//global bundle
app.get('/bundle.js', browserify(__dirname + '/public/index.js'));

//context bundle
app.get('/context_bundle.js', browserify(__dirname + '/app/home/context_bundle.js'));
app.get('/', function (req, res) {
		var tmpl = jsrender.templates("./app/home/index.html")
		var html = tmpl.render();
		var context = { hello: "world", template: html};

        res.render('app/layout', context, function(err, html) {
            res.send(err ? jsrender.views.converters.html(err.message) : html); // HTML encode message
        });
});






http.listen('3000', function () {
    console.log('Express Listening at Port: 3000 ');
});

