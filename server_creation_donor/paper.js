module.exports = (userID, serverName, location) => {
    return {
    "name": serverName,
    "user": userID,
    "nest": 9,
    "egg": 52,
    "docker_image": "ghcr.io/pterodactyl/yolks:java_11",
    "startup": "java -Xms128M -Xmx{{SERVER_MEMORY}}M -Dterminal.jline=false -Dterminal.ansi=true -jar {{SERVER_JARFILE}}",
    "limits": {
        "memory": 3072,
        "swap": 0,
        "disk": 3072,
        "io": 500,
        "cpu": 0
    },
    "environment": {
        "MINECRAFT_VERSION": "latest",
        "SERVER_JARFILE": "server.jar",
        "DL_PATH": "https://papermc.io/api/v2/projects/paper/versions/1.16.5/builds/503/downloads/paper-1.16.5-503.jar",
        "BUILD_NUMBER": "latest"
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