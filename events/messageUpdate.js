const Discord = require("discord.js")


module.exports = (client, oldMessage, newMessage) => {

    if (oldMessage.author == null || oldMessage.author.bot == true || !oldMessage.content || newMessage == null) return;

    let data = {
        message: oldMessage.content,
        member: oldMessage.member,
        timestamp: Date.now(),
        action: "edit"
    };

    if (client.snipes.get(oldMessage.channel.id) == null) client.snipes.set(oldMessage.channel.id, [data])
    else client.snipes.set(oldMessage.channel.id, [...client.snipes.get(oldMessage.channel.id), data]);

    client.snipes.set(oldMessage.channel.id, client.snipes.get(oldMessage.channel.id).filter(x => (Date.now() - x.timestamp) < 300000 && x != null));
   // const embed = new Discord.MessageEmbed()
  ///  embed.setTitle('✏️ Edited Message')
 //   embed.setColor(`BLUE`)
 //   message.content ? embed.addField(`Message Content`, message.content.includes('```') ? `${message.content}` : `\`\`\`\n${message.content}\`\`\``) : null
  //  message.attachments?.size !== 0 ? embed.setImage(message.attachments?.first()?.proxyURL) : null
 //   message.attachments?.size !== 0 ? content = message.attachments?.map(x => x?.proxyURL).join("\n") : content = null
    //embed.setFooter({ text: `${message.member.user.tag} (${message.member.user.id}) \nin #${message.channel.name}`, iconURL: message?.member?.user?.displayAvatarURL()});
   // embed.setTimestamp()
    

//    client.channels.cache.get(config.channelID.messages_managering).send({content: content, embeds: [embed]}).catch(err => {})

}