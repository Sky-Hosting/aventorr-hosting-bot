module.exports = (userID, serverName, location) => {
    return {
        "name": serverName,
        "user": userID,
        "nest": 5,
        "egg": 17,
        "docker_image": "ghcr.io/parkervcp/yolks:java_16",
        "startup": "java -Dterminal.jline=false -Dterminal.ansi=true -jar {{JARFILE}}",
        "limits": {
            "memory": 0,
            "swap": 0,
            "disk": 1024,
            "io": 500,
            "cpu": 0
        },
        "environment": {
            "JARFILE": "sneakyhub.jar"
        },
        "feature_limits": {
            "databases": 1,
            "allocations": 2,
            "backups": 0
        },
        "deploy": {
            "locations": [location],
            "dedicated_ip": false,
            "port_range": []
        },
        "start_on_completion": false
    }
}