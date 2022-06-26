module.exports = (userID, serverName, location) => {
    return {
        "name": serverName,
        "user": userID,
        "nest": 11,
        "egg": 39,
        "docker_image": "ghcr.io/pterodactyl/yolks:debian",
        "startup": './ts3server default_voice_port={{SERVER_PORT}} query_port={{QUERY_PORT}} filetransfer_ip=0.0.0.0 filetransfer_port={{FILE_TRANSFER}} license_accepted=1',
        "limits": {
            "memory": 0,
            "swap": 0,
            "disk": 1024,
            "io": 500,
            "cpu": 0
        },
        "environment": {
                "TS_VERSION": "latest",
                "FILE_TRANSFER": "30033",
                "QUERY_PORT": "10011"
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
        "start_on_completion": false
    }
}