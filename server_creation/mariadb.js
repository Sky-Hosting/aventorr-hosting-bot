module.exports = (userID, serverName, location) => {

    return {
        "name": serverName,
        "user": userID,
        "nest": 6,
        "egg": 18,
        "docker_image": "quay.io/parkervcp/pterodactyl-images:db_mariadb",
        "startup": "{ /usr/sbin/mysqld & } && sleep 5 && mysql -u root",
        "limits": {
            "memory": 0,
            "swap": 0,
            "disk": 1024,
            "io": 500,
            "cpu": 0
        },
        "environment": {

        },
 "feature_limits": {
            "databases": 0,
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