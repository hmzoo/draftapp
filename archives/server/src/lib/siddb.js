var Promise = require("bluebird");
var dbClient = require("./rc.js").getClient();
var getRName =require("./rname.js")


var kttl = 60 * 60 * 48;

var siddb = {};



var setData = function(key, data) {
    return new Promise(function(resolve, reject) {
        dbClient.setex(key, kttl, data, function(err, reply) {
            if (err) {
                reject("db error");
            };
            resolve(data);

        });
    });
}
var getData = function(key) {
    return new Promise(function(resolve, reject) {
        dbClient.get(key, function(err, reply) {
            if (err) {
                reject("db error");
            };
            if (reply) {
                resolve(reply);
            } else {
                resolve('');
            }

        });
    });
}
var delData = function(key) {
    return new Promise(function(resolve, reject) {
        dbClient.del(key, function(err, reply) {
            if (err) {
                reject("db error");
            };

            resolve(key);

        });
    });
}

//COMBO
var registerUser=function(sid, user) {
    var keysiduser = "sid:" + sid + ":user";
    var keyusersid = "user:" + user + ":sid";
    var psetSidUser = setData(keysiduser, user);
    var psetUserSid = psetSidUser.then(function(result) {
        return setData(keyusersid, sid);
    });
    return psetUserSid.then(function(result) {
        return Promise.resolve({user: user, sid: sid});
    });
}

siddb.newUser = function(sid) {

    var prname = getRName();
    return prname.then(function(result) {
        return registerUser(sid, result);
    });

}

siddb.renewUser = function(sid, user) {
    var keyusersid = "user:" + user + ":sid";
    var pgetUserSid = getData(keyusersid);
    var pgetSidUser = pgetUserSid.then(function(result) {
      if(!result){return siddb.newUser(sid);}
        return getData("sid:"+result+":user");
    });
    return  pgetSidUser.then(function(result) {
      if(result!=user){return siddb.newUser(sid);}
        return registerUser(sid, result);
    });
}

siddb.join = function(sid, room) {
    var keysiduser = "sid:" + sid + ":user";
    var keysidroom = "sid:" + sid + ":room";
    var keyuserroom = "";
    var sid = sid;
    var oldRoom = "";
    var room = room || "";
    var user = "";

    var pgetSidRoom = getData(keysidroom);
    var pgetSidUser = pgetSidRoom.then(function(result) {
        oldRoom = result;
        return getData(keysiduser);
    });
    var psetSidRoom = pgetSidUser.then(function(result) {
        user = result;
        keyuserroom = "user:" + result + ":room";
        return setData(keysidroom, room);
    });
    var psetUserRoom = pgetSidRoom.then(function(result) {
        return setData(keyuserroom, room);
    });
    return psetUserRoom.then(function(result) {
        return Promise.resolve({user: user, room: room, oldRoom: oldRoom, sid: sid});
    });

}

siddb.sidInfos=function(sid){
  var user,room;
  var keysiduser = "sid:" + sid + ":user";
  var keysidroom = "sid:" + sid + ":room";
  var pgetSidRoom = getData(keysidroom);
  var pgetSidUser = pgetSidRoom.then(function(result) {
      room = result;
      return getData(keysiduser);
  });
  return pgetSidUser.then(function(result) {
      return Promise.resolve({user: result, room: room, sid: sid});
  });

}

siddb.fromTo = function(sid, user) {
    var keysiduser = "sid:" + sid + ":user";
    var keyusersid = "user:" + user + ":sid";
    var from,
        to;
    var pgetSidUser = getData(keysiduser);
    var pgetUserSid = pgetSidUser.then(function(result) {
        from = result;
        return getData(keyusersid);
    });
    return pgetUserSid.then(function(result) {
        return Promise.resolve({from: from, to: result})
    });
}

module.exports = siddb;
