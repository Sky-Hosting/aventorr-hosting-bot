const Discord = require('discord.js');
const config = require(`./config.json`);
const db = require('quick.db');
//const fetch = require("node-fetch").default




const client = new Discord.Client({ intents: new Discord.Intents(32767), partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
console.log("index runing . . .")
client.snipes = new Discord.Collection();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

global.invinfo = new db.table("InviteInfo");
global.invitedBy = new db.table("InvitedByInfo");
global.domains = new db.table("ProxiedDomains");

require(`./handlers/event_handler`)(client);
require(`./handlers/command_handler`)(client);
//require(`./handlers/Anti-crash`)(client);


if(config.settings.consoleSave) require(`./logs/console.log`)();



client.login(config.bot.token);