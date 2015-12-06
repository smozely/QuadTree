"use strict";

class QuadTree {

    /**
     * Create a QuadTree
     *
     * @param {Array} datapoints - The points to be added to the QuadTree
     *
     * @return {QuadTree} - QuadTree created with the provided points
     */
    static constructFrom(datapoints) {
        throw new Error("Not Yet Implemented");
    }

    /**
     * Find the points in this QuadTree that intersect with the provided rectangle
     *
     * @param {Rectangle} rectangle - The rectangle to find the points in
     * @param {Function} callback - The function to notify as each point is found
     */
    intersect(rectangle, callback) {
        throw new Error("Not Yet Implemented");
    }

}

module.exports = QuadTree;