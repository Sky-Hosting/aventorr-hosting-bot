const Discord = require('discord.js')
const { add } = require('quick.db')
module.exports = {
    name: "links",
    aliases: [''], 
    async run(client, message, args){
        message.reply({embeds:[
            new Discord.MessageEmbed()
            .setTitle(`Sky Hosting Links`)
            .setColor(`#677bf9`)
            .addField("Website", "[Link](https://skyhosting.digital)", true)
            .addField("Panel", "[Link](https://panel.skyhosting.digital)", true)
            .addField("Donate","[Link](https://ko-fi.com/skyhosting)", true)
        ]})
    }
}