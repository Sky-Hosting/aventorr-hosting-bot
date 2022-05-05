const config = require('../config.json')
const fastify = require('fastify')()
const axios = require('axios')
const os = require("os");
const moment = require("moment");
const si = require('systeminformation');

fastify.register(require('fastify-rate-limit'), {
    max: 150,
    timeWindow: '1 minute',
})

module.exports = async (client) => {
    fastify.get('/status', async (request, reply) => {

        let memdata = await si.mem();
        let diskdata = await si.fsSize();
        let cl = await si.currentLoad();
        let uptime = await os.uptime();

        let panel
        let node1 = {
            name: "Node 1",
            status: true,
            cpuload: cl.currentLoad.toFixed(2),
            ramused: memdata.active,
            ramtotal: memdata.total,
            diskused: diskdata[0].used,
            disktotal: diskdata[0].size,
            uptime: uptime * 1000
        }




        await axios({
            url: config.pterodactyl.host + '/api/client/servers/' + "e4d1e546" + "/resources",
            method: 'GET',
            followRedirect: true,
            maxRedirects: 5,
            headers: {
                'Authorization': 'Bearer ' + config.pterodactyl.clientAPI,
                'Content-Type': 'application/json',
                'Accept': 'Application/vnd.pterodactyl.v1+json',
            }
        }).then(data => {
            panel = {
                name: "Panel",
                status: true,
            }
            
            panel = {
                name: "Panel",
                status: false
            }
        })

        reply.send({
            panel,
            node1,
            datatime: Date.now(),
            updatetime: moment().format("YYYY-MM-DD HH:mm:ss")
        })
    })
      
    if(!config.settings.fastify) return
    fastify.listen(3098, "0.0.0.0", (err, address) => {
        if (err) throw err
        console.log(`Listening to ${address}`);
    })
}