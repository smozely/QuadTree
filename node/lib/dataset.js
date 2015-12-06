"use strict";

var fs = require("fs");
var DataPoint = require('./datapoint');

function load(name) {
    let result = [];
    let lines = fs.readFileSync(name, "utf8").split('\n');

    lines.forEach(function(line) {
        let components = line.split(',');
        if (components.length === 2) {
            result.push(new DataPoint(Number(components[0]), Number(components[1])));
        }
    });

    return result;
}

module.exports = load;