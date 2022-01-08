var winston = require("winston");
//var winstonDailyRotate = require('winston-daily-rotate-file');    // Can be used to create new log files daily

var level = process.env.LOG_LEVEL || 'debug';

var logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'log/info.log',level: level, timestamp: function(){return (new Date()).toISOString} })
    ]
});

module.exports = logger