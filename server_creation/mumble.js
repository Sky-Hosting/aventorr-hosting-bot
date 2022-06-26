module.exports = (userID, serverName, location) => {
return {
    "name": serverName,
    "user": userID,
    "nest": 3,
    "egg": 12,
    "docker_image": "quay.io/pterodactyl/core:glibc",
    "startup": `./murmur.x86 -fg`,
    "limits": {
        "memory": 0,
        "swap": 0,
        "disk": 1024,
        "io": 500,
        "cpu": 0
    },
    "environment": {
        "MAX_USERS": "100",
        "MUMBLE_VERSION": "1.3.1"
    },
    "feature_limits": {
        "databases": 2,
        "allocations": 1,
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