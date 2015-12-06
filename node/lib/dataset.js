"use strict";

var fs = require("fs");
var DataPoint = require('./datapoint');

function load(name) {
    let result = [];
    let lines = fs.readFileSync(name, "utf8").split('\n');

    for (let i = 0; i < lines.length; i++) {
        let components = lines[i].split(',');
        if (components.length === 2) {
            result.push(new DataPoint(Number(components[0]), Number(components[1])));
        }
    }
    return result;
}

module.exports = load;