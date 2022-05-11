module.exports = (userID, serverName, location) => {
    return {
        "name": serverName,
        "user": userID,
        "nest": 6,
        "egg": 24,
        "docker_image": "quay.io/parkervcp/pterodactyl-images:bot_red",
        "startup": "PATH=$PATH:/home/container/.local/bin redbot pterodactyl --token {{TOKEN}} --prefix {{PREFIX}}",
        "limits": {
            "memory": 0,
            "swap": 0,
            "disk": 1024,
            "io": 500,
            "cpu": 0
        },
        "environment": {
            "TOKEN": "Your_bot_token_here",
            "PREFIX": "."
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