var fs = require('fs');
var browserify = require('browserify');

// JsRender Browserify transform:
var tmplify = require("jsrender/tmplify");
// Used to allow client-side access to JsRender templates stored on server file system.
// Server-side require(./some/path.html) adds template to bundle (as well as any nested
// referenced templates) and allows client-side access as: $.templates("./some/path.html");

browserify('public/index.js')
  .transform(tmplify)
  .bundle()
  .pipe(fs.createWriteStream('public/bundle.js'));

