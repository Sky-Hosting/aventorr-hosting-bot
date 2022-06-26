module.exports = (userID, serverName, location) => {
    return {
            "name": serverName,
            "user": userID,
            "nest": 9,
            "egg": 50,
            "docker_image": "ghcr.io/parkervcp/yolks:debian",
            "startup": "./bedrock_server",
            "limits": {
                "memory": 3072,
                "swap": 0,
                "disk": 3072,
                "io": 500,
                "cpu": 0
            },
            "environment": {
                "BEDROCK_VERSION": "latest",
                "LD_LIBRARY_PATH": "."
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