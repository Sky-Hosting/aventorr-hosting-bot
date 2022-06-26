module.exports = (userID, serverName, location) => {
    return {
        "name": serverName,
        "user": userID,
        "nest": 9,
        "egg": 53,
        "docker_image": "ghcr.io/parkervcp/yolks:debian",
        "startup": "./bin/php7/bin/php ./PocketMine-MP.phar --no-wizard --disable-ansi",
        "limits": {
            "memory": 3072,
            "swap": 0,
            "disk": 3072,
            "io": 500,
            "cpu": 0
        },
        "environment": {
            "PMMP_VERSION": "latest"
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