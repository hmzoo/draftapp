var redis = require('redis');
var host = process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.01';
var port = process.env.REDIS_PORT_6379_TCP_PORT || 6379;
var password = process.env.REDIS_PASSWORD || '';
var rc = {};

rc.newClient = function() {
    var client = redis.createClient(port, host);;
    if (password) {
        client.auth(password, function(err) {
            if (err) {
                throw err;
            }
        });

    }
    return client;
}

//MAIN CLIENT
var mainClient = rc.newClient();
rc.getClient = function() {
    return mainClient;
}



////



module.exports = rc;
