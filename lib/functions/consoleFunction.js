const chalk = require('chalk')

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');

function consoleLogError(options) {
    const { message, location } = options;
    if(!options.location) return console.log(error(`[Sky Hosting Error]\n\n${options.message}\n`))
    return console.log(error(`[Sky Hosting Error]\n\n${options.message} at ${options.location}\n`))
};

function consoleLogWarn(options) {
    const { message, location } = options;
    if(!options.location) return console.log(error(`[Sky Hosting Warn Message]\n\n${options.message}\n`))
    return console.log(error(`[Sky Hosting Warn Message]\n\n${options.message} at ${options.location}\n`))
};

module.exports = consoleLogError, consoleLogWarn