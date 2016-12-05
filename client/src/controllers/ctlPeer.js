import simplepeer from 'simple-peer';


export const initPeer = (name, init,cb)=> {

        let peer = new SimplePeer({
            initiator: init
        });

        peer.on('signal', function(data) {
          console.log("peer signal", name, data);
        });

        peer.on('connect', function() {
            console.log("peer", name, "connected");
        });
        peer.on('error', function(e) {
            console.log("peer", name, "error", e);
        });
        peer.on('close', function() {
            console.log("peer", name, "closed");
        });
        peer.on('data', function(data) {
            try {
                data = JSON.parse(data)
            } catch (err) {
                console.error(err)
            }
            console.error(data);

        });

        cb(peer);


    };
