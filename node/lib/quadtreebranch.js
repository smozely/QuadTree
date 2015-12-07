"use strict";

var QuadTreeLeaf = require('./quadtreeleaf');

class QuadTreeBranch {

    constructor (rectangle, topLeft, bottomLeft, topRight, bottomRight, points) {
        this.rectangle = rectangle;
        this.topLeft = topLeft;
        this.bottomLeft = bottomLeft;
        this.topRight = topRight;
        this.bottomRight = bottomRight;
        points.forEach((point) => {
            this.push(point);
        });    
    }

    push (point) { 
        if (this.topLeft.contains(point)) {
            this.topLeft = this.topLeft.push(point);
        } else if (this.bottomLeft.contains(point)) {
            this.bottomLeft = this.bottomLeft.push(point);
        } else if (this.topRight.contains(point)) {
            this.topRight = this.topRight.push(point);
        } else if (this.bottomRight.contains(point)) {
            this.bottomRight = this.bottomRight.push(point);
        }
        return this;
    }

    intersect(rectangle, callback) {
        if (this.rectangle.intersects(rectangle)) {
            this.topLeft.intersect(rectangle, callback);
            this.bottomLeft.intersect(rectangle, callback);
            this.topRight.intersect(rectangle, callback);
            this.bottomRight.intersect(rectangle, callback);            
        }
    }

    contains(point) {
        return this.topLeft.contains(point) || this.bottomLeft.contains(point) ||
               this.topRight.contains(point) || this.bottomRight.contains(point);
    }

    toString(indent) {
        return indent + "QuadTreeBranch rectangle: {"+this.rectangle.toString()+"}, \n"+indent+"topLeft: {" + this.topLeft.toString(indent + "  ") + "}, \n"+indent+"bottomLeft: {" + this.bottomLeft.toString(indent + "  ") + "},\n"+indent+"topRight: {" + this.topRight.toString(indent + "  ") + "},\n"+indent+"topRight: {" + this.bottomRight.toString(indent + "  ") + "}"; 
    }

    size () {
        return this.topLeft.size() + this.topRight.size() + this.bottomLeft.size() + this.bottomRight.size();
    }

}

module.exports = QuadTreeBranch;