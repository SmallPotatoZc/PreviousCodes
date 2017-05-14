var browserify = require('browserify');

var b = browserify();
b.add('./src/app.js');
b.bundle().pipe(process.stdout);
