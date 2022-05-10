const config = require('../config.json')
const lib = require(`${process.cwd()}/lib`)

module.exports = async (client, error) => {
    lib.consoleLogError({ message: 'error' })
    client.channels.cache.get(config.channelID.errorLog).send(''+error+'.')
}