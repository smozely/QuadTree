"use strict";

class Rectangle {

    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    contains(point) {        
        return point.x >= this.x1
            && point.y >= this.y1
            && point.x <= this.x2
            && point.y <= this.y2;
    }

    intersects(rectangle) {
        return rectangle.x1 < this.x2 
            && rectangle.x2 > this.x1 
            && rectangle.y1 < this.y2 
            && rectangle.y2 > this.y1;
    }
    
    midX() {
        return (this.x1 + this.x2) / 2;
    }

    midY() {
        return (this.y1 + this.y2) / 2;
    }

    bottomLeft() {
        return new Rectangle(this.x1, this.y1, this.midX(), this.midY());
    }

    topLeft() {
        return new Rectangle(this.x1, this.midY(), this.midX(), this.y2);
    }

    bottomRight() {
        return new Rectangle(this.midX(), this.y1, this.x2, this.midY());
    }

    topRight() {
        return new Rectangle(this.midX(), this.midY(), this.x2, this.y2);
    }

}

module.exports = Rectangle;