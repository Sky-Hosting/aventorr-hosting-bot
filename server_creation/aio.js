module.exports = (userID, serverName, location) => {
    return {
        "name": serverName,
        "user": userID,
        "nest": 6,
        "egg": 49,
        "docker_image": "danbothosting/aio",
        "startup": "{{STARTUP_CMD}}",
        "limits": {
            "memory": 0,
            "swap": 0,
            "disk": 1024,
            "io": 500,
            "cpu": 0
        },
        "environment": {
            "STARTUP_CMD": "bash"
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