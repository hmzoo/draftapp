var socketio = require('socket.io');
var server = require('./lib/server');
var siddb = require('./lib/siddb.js');
var PubSub = require('./lib/pubsub.js');

var io = socketio.listen(server);
var ps = new PubSub(io);

var srvID = (Math.floor(Math.random() * 900000) + 100000).toString()

io.on('connection', function(client) {
    console.log('Client connected', client.id);
    //MAIN EVENTS
    client.on('disconnect', function() {
        console.log('Client disconnected', client.id);
        ps.toRoom(client.id, "setuser", {state: 'down'});
    });

    client.on('test', function(data) {
        console.log('test',data);

    });

    client.on('whoami', function() {
        var s = io.sockets.connected[client.id];
        siddb.newUser(client.id).then(function(result) {
            s.emit('youare', {
                user: result.user,
                srv: srvID
            });
        });

    });

    client.on('iamback', function(data) {
        if (!data && !data.user) {
            return;
        }
        var s = io.sockets.connected[client.id];
        siddb.renewUser(client.id, data.user).then(function(result) {
            s.emit('youare', {
                user: result.user,
                srv: srvID
            });
        });
    });

    client.on('join', function(data) {
        if (!data) {
            return;
        }
        var s = io.sockets.connected[client.id];

        siddb.join(client.id, data.room).then(function(result) {
            if (result.oldRoom && (result.oldRoom != result.room)) {
                ps.toRoom(client.id, "setuser", {state: 'out'},result.oldRoom);
                s.leave(result.oldRoom);
                s.emit('leaving', {room: result.oldRoom});
            }
            if (result.room) {
                ps.toRoom(client.id, "setuser", {state: 'in',infos: data.infos||''});
                s.join(result.room);
                s.emit('joining', {room: result.room});
            }else{

                s.emit('nowhere', {reason: "room left",oldRoom:result.oldRoom});
            }

        });
    });

    //ADDONS EVENTS
    client.on('infos', function(data) {

        ps.toRoom(client.id, "infos", data);
    });
    client.on('message', function(data) {

        ps.toRoom(client.id, "message", data);
    });

    client.on('pmessage', function(data) {
        if (!data) {
            return;
        }
        ps.toUser(client.id,data.to, "pmessage", data.content);

    });

    client.on('peersignal', function(data) {

        if (!data) {
            return;
        }
        ps.toUser(client.id,data.to, "peersignal", data.signal);

    });
    client.on('speersignal', function(data) {

        if (!data) {
            return;
        }
        ps.toUser(client.id,data.to, "speersignal", data.signal);

    });

});
