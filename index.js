var express = require('express');
var app = express();
var path = require('path');    
var bodyParser = require('body-parser');
var compression = require('compression');
var fs = require('fs');    
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
var env = require('dotenv').config();
var logger = require('./logger/logger.js');

var logDirectory = path.join(__dirname, 'log');

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

     app.use(bodyParser.urlencoded({
        verify: rawBodySaver,
        extended: true
    }));

    app.use(bodyParser.json({
        verify: rawBodySaver
    }));

    app.use(bodyParser.raw({
        verify: rawBodySaver,
        type: true
    }));

    var rawBodySaver = function(req, res, buf, encoding) {
        if (buf && buf.length) {
            req.rawBody = buf.toString(encoding || 'utf8');
        }
    }

    app.use(express.static("."));

    app.use(require('./routes'));

    app.use(compression());

    app.use('/swagger',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.listen(process.env.PORT, function() {
        logger.info('Magic happens on port 3001!');
    });
module.exports = app;