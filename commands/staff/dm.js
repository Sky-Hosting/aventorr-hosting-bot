const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");
const config = require('../../config.json');
const axios = require('axios');
module.exports = async (client, message, args) => {
    if (!message.member.roles.cache.has(config.roleID.support)) return message.channel.send('You do not have the required permissions to use this command.');

    message.delete().catch(O_o=>{});
    let user = message.mentions.members.first() || message.guild.members.get(args[0]);
    const dmtosend = args.slice(1).join(" ")

    const dmembed = new MessageEmbed()
    	.setTitle("New Direct Message!")
    	.setDescription(dmtosend)
    	.setFooter("Sky Hosting Administrations")


    user.send({ embeds: [dmembed] });
    
    message.channel.send("Message sent by " + message.author.tag)
  }

