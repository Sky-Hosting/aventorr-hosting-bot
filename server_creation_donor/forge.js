module.exports = (userID, serverName, location) => {
    return {
"name": serverName,
"user": userID,
"nest": 9,
"egg": 55,
"docker_image": "ghcr.io/pterodactyl/yolks:java_11",
"startup": `java -Xms128M -Xmx{{SERVER_MEMORY}}M -Dterminal.jline=false -Dterminal.ansi=true $( [[  ! -f unix_args.txt ]] && printf %s "-jar {{SERVER_JARFILE}}" || printf %s "@unix_args.txt" )`,
"limits": {
    "memory": 3072,
    "swap": 0,
    "disk": 3072,
    "io": 500,
    "cpu": 0
},
"environment": {
    "SERVER_JARFILE": "server.jar",
    "MC_VERSION": "latest",
    "BUILD_TYPE": "recommended",
    "FORGE_VERSION": "1.16.3"
},
"feature_limits": {
    "databases": 0,
    "allocations": 0,
    "backups": 0
},
"deploy": {
    "locations": location,
    "dedicated_ip": false,
    "port_range": []
},
"start_on_completion": false,
"oom_disabled": false
}
}