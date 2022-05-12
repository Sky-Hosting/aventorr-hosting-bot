const chalk = require('chalk')
const config = require(`${proccess.cwd()}/config.json`)
const client = require(`${process.cwd()}/index.js`)
const { MessageEmbed } = require('discord.js');

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');

function consoleLogError(options) {
    const { message, location } = options;
    if(!options.message) return;
    if(!options.location) {
        console.log(error(`[Sky Hosting Error]\n\n${options.message}\n`))
        const embed = new MessageEmbed()
            .setTitle('Error')
            .setDescription(options.message)
        client.channels.cache.get(config.channelID.errorLog).send({ embeds: [embed] })
    } else {
        console.log(error(`[Sky Hosting Error]\n\n${options.message} at ${options.location}\n`))
        const embed = new MessageEmbed()
            .setTitle('Error')
            .setDescription(options.message + 'at' + options.location)
        client.channels.cache.get(config.channelID.errorLog).send({ embeds: [embed] })
    }
};

function consoleLogWarn(options) {
    const { message, location } = options;
    if(!options.message) return;
    if(!options.location) {
        console.log(error(`[Sky Hosting Warn Message]\n\n${options.message}\n`))
        const embed = new MessageEmbed()
            .setTitle('Warn')
            .setDescription(options.message)
        client.channels.cache.get(974039203518251079).send({ embeds: [embed] })
    } else {
        console.log(error(`[Sky Hosting Warn Message]\n\n${options.message} at ${options.location}\n`))
        const embed = new MessageEmbed()
            .setTitle('Warn')
            .setDescription(options.message + 'at' + options.location)
        client.channels.cache.get(974039203518251079).send({ embeds: [embed] })
    }
};

module.exports = consoleLogError, consoleLogWarn