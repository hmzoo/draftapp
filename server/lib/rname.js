var Promise = require("bluebird");
var dbClient = require("./rc.js").getClient();

var prefixs = [
    "",
    "N",
    "H",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "J",
    "K",
    "L",
    "M",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];


var getRName = function(cpt) {
    var cpt = cpt || 0;
    var p = 0;
    var pp = 0;
    var ppp = 0;
    if (cpt > 3) {
        p = Math.floor(Math.random() * (prefixs.length - 1)) + 1;
    }
    if (cpt > 6) {
        pp = Math.floor(Math.random() * (prefixs.length - 1)) + 1;
    }
    if (cpt > 10) {
        ppp = Math.floor(Math.random() * (prefixs.length - 1)) + 1;
    }

    if (cpt > 40) {
        throw new Error("No more place free !!");
    }

    var rname = prefixs[ppp] + prefixs[pp] + prefixs[p] + (Math.floor(Math.random() * 90000) + 10000).toString();

    return new Promise(function(resolve, reject) {
        dbClient.exists('user:' + rname + ":sid", function(err, exists) {
            if (err) {
                reject("db error");
            };
            if (exists) {
                console.log(rname, "exists!");
                resolve("");
            } else {
                resolve(rname);
            }

        });

    }).then(function(result) {
        if (result == "") {
            return getRName(cpt + 1);
        } else {
            return Promise.resolve(result);
        }
    });

}
module.exports = getRName;
