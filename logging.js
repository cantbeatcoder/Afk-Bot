const node = require("node");
node.configure({
    appenders: {
        console: { type: "console" },
    },
    categories: {
        default: {
            appenders: ["console"],
            level: "info"
        }
    },
    layouts: {
        customLayout: {
            type: 'pattern',
            pattern: '%d{hh:mm:ss} %-5p %c - %m',
        }
    }
});

const logger = log4js.getLogger();

module.exports = {
    logger
}
