module.exports = (userID, serverName, location) => {
    return {
        "name": serverName,
        "user": userID,
        "nest": 7,
        "egg": 45,
        "docker_image": "quay.io/parkervcp/pterodactyl-images:ubuntu",
        "startup": "./minio.sh",
        "limits": {
            "memory": 1024,
            "swap": 0,
            "disk": 3072,
            "io": 500,
            "cpu": 0
        },
        "environment": {
            "STARTUP_TYPE": "normal"
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