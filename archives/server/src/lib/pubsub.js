var rc = require("./rc.js");
var siddb = require('./siddb.js');

var ps = function(io) {
    var io = io;
    var pubClient = rc.newClient();
    var subClient = rc.newClient();

    //SUB

    subClient.subscribe("ftu");
    subClient.subscribe("ftr");
    subClient.subscribe("fta");

    subClient.on('message', function(channel, data) {
        var data = JSON.parse(data);

        if (!io || !io.sockets) {
            return;
        }
        switch (channel) {
            case 'ftu':
                if (io.sockets.connected[data.toSid]) {

                    io.sockets.connected[data.toSid].emit(data.ioChannel, {
                        from: data.fromName,
                        content: data.content
                    });
                }

                break;

            case 'ftr':

                io.sockets.in(data.room).emit(data.ioChannel, {
                    from: data.fromName,
                    content: data.content
                });


                break;

            case 'fta':
                io.sockets.emit(data.ioChannel, {
                    from: data.from,
                    room: data.room,
                    content: data.content
                });

                break;
        }

    });
    //
    this.toUser = function(fromSid, toName, ioChannel, content) {

        siddb.fromTo(fromSid, toName).then(function(result) {
            if (!result.to) {
              io.sockets.connected[fromSid].emit("nobody", {
                  channel: ioChannel,
                  user: toName
              });

            } else {
                pubClient.publish("ftu", JSON.stringify({
                    fromSid: fromSid,
                    fromName: result.from,
                    toSid: result.to,
                    toName: toName,
                    ioChannel: ioChannel,
                    content: content || {}
                }));
            }
        });
    }
    this.toRoom = function(fromSid, ioChannel, content, room) {

        siddb.sidInfos(fromSid).then(function(result) {
            pubClient.publish("ftr", JSON.stringify({
                fromSid: fromSid,
                fromName: result.user,
                room: room || result.room || '',
                ioChannel: ioChannel,
                content: content || {}

            }));

        });
    }
    this.toAll = function(fromSid, ioChannel, content) {
        siddb.sidInfos(fromSid).then(function(result) {
            pubClient.publish("fta", JSON.stringify({
                fromSid: fromSid,
                fromName: result.user,
                room: result.room || '',
                ioChannel: ioChannel,
                content: content || {}
            }));
        });
    }

}
module.exports = ps;
