"use strict";

var QuadTreeLeaf = require('./quadtreeleaf')
var Rectangle = require('./rectangle');

class QuadTree {

    /**
     * Create a QuadTree
     *
     * @param {Array} datapoints - The points to be added to the QuadTree
     *
     * @return {QuadTree} - QuadTree created with the provided points
     */
    static constructFrom(datapoints) {
        return new QuadTree(datapoints);
    }

    constructor (datapoints) {
        // TODO it would be cool to implement this to not need to know the max rect size at the beginning
        this.node = new QuadTreeLeaf(new Rectangle(-1, -1, 1, 1));

        datapoints.forEach((point) => {
            this.node = this.node.push(point);
        });

        if (this.node.size() != datapoints.length) {
            throw new Error("QuadTree dropped some data points while being created.")
        }
    }

    /**
     * Find the points in this QuadTree that intersect with the provided rectangle
     *
     * @param {Rectangle} rectangle - The rectangle to find the points in
     * @param {Function} callback - The function to notify as each point is found
     */
    intersect(rectangle, callback) {
        this.node.intersect(rectangle, callback);
    }

}

module.exports = QuadTree;