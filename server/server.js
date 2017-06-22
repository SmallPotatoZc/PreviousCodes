var debug = require('debug')('server');
var fs = require('fs');
var path = require('path');
var json = require('comment-json');
var express = require('express');

var app = express();

var cfg = json.parse(fs.readFileSync('./config.json'), null, true);

debug('配置信息', cfg);

app.use('/', express.static(path.join(__dirname, '../' + cfg.resourcesPath + '/')));

app.listen(cfg.port);
