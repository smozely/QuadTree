"use strict";

var Rectangle = require('./rectangle');
var QuadTreeBranch = require('./quadtreebranch');

const MAX_POINTS = 1000;

class QuadTreeLeaf {

    constructor(rectangle) {
        this.rectangle = rectangle;
        this.points = [];
    }

    push (point) {        
        if (this.contains(point)) {
            if (this.points.length === MAX_POINTS) {            
                let newBranch = new QuadTreeBranch(
                    this.rectangle,
                    new QuadTreeLeaf(this.rectangle.topLeft()), 
                    new QuadTreeLeaf(this.rectangle.bottomLeft()), 
                    new QuadTreeLeaf(this.rectangle.topRight()),
                    new QuadTreeLeaf(this.rectangle.bottomRight()), 
                    this.points
                ); 
                newBranch.push(point)
                return newBranch;
            }

            this.points.push(point);                    
            return this;
        } else {
            throw new Error("push on QuadTreeLeaf should only be called with belonging points.");
        }
    }

    intersect(rectangle, callback) {
        if (this.rectangle.intersects(rectangle)) {
            this.points.forEach((element) => {
                if (rectangle.contains(element)) {
                    callback(element);
                }
            });
        }
    }

    contains(point) {
        return this.rectangle.contains(point);
    }

    size() {
        return this.points.length
    }

}

module.exports = QuadTreeLeaf;