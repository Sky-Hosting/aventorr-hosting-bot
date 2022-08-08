const chalk = require('chalk');
const config = require('../config.json');
const exec = require('child_process').exec;
const fs = require('fs');
const Discord = require('discord.js')
const client = require('discord.js')
let idkwhatisthis = false

module.exports = async (client) => {
    client.channels.cache.get(config.channelID.botBooted).send(`<@529305930387423244> Bot Started ... ${Date.now()}`)
    console.log(chalk.hex('#6b7dfb')(`
    
          
                                                                        |___/
    `))
    console.log(`${chalk.blue('[ Bot ]')} Logged in as: ${chalk.underline(client.user.tag)}`)
    console.log(`${chalk.blue('[ Bot ]')} Save Console: ${config.settings.consoleSave ? chalk.green('true') : chalk.red('false')}`)
    console.log(`${chalk.blue('[ Bot ]')} Node Status: ${config.settings.nodeStatus ? chalk.green('true') : chalk.red('false')}`)
    console.log(`${chalk.blue('[ Bot ]')} Maintenance mode: ${config.settings.maintenance ? chalk.green('true ') : chalk.red('false')}`)
    console.log(`${chalk.blue('[ Bot ]')} Auto Leave Guilds: ${config.settings.autoLeave ? chalk.green('true') : chalk.red('false')}`)
    console.log(`${chalk.blue('[ Bot ]')} Update files from Github: ${config.settings.updateFromGithub ? chalk.green('true') : chalk.red('false')}`)
    console.log()

    
      if(config.settings.updateFromGithub){
        setInterval(async () => {
            await exec(`git pull`, async (error, stdout) => {
                let response = (error || stdout);
                if (!error) {
                    if (!response.includes("Already up to date.")){
                        console.log(`${chalk.red('[ GitHub ]')} Update found on github. downloading now!`);
                        await client.channels.cache.get(config.channelID.github).send({content: "**RESTARTING . . .**", embeds:[
                            new Discord.MessageEmbed()
                            .setTitle(`**[PULL FROM GITHUB]** New update on GitHub. Pulling.`)
                            .setColor(`BLUE`)
                            .setDescription(`Logs:\n\`\`\`\n${response}\`\`\``)
                        ]})
                        console.log(`${chalk.red('[ GitHub ]')} the new version had been installed. Restarting now . . .`)
                        process.exit()
                    }else {
                        if(!idkwhatisthis) {console.log(`${chalk.green('[ GitHub ]')} Bot is up to date\n`); idkwhatisthis = true}
                    }
                }else{
                    console.log(`${chalk.red('[ GitHub ]')} Error: ${error}\n`)
                }
            })
        }, 30000)
    }




    config.settings.maintenance ? client.user.setActivity(config.settings.statusOnMaintenance) : client.user.setActivity("Sky Hosting", { type: "WATCHING" })

    
    const autorun = fs.readdirSync(`./autoRun`).filter(file => file.endsWith('.js'));
    autorun.forEach(file => {
        require(`../autoRun/${file}`)(client)
    });

    if(config.settings.autoLeave) client.guilds.cache.forEach(g => {
        if(g.id === config.settings.guildID) return
        g.leave().catch(console.error)
    })
}


