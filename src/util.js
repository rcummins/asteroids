const Util = {
  inherits(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },

  randomVec(length) {
    const angle = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(angle), Math.cos(angle)], length);
  },

  scale(vector, m) {
    return [vector[0] * m, vector[1] * m];
  },

  distance(pos1, pos2) {
    let xDist = pos1[0] - pos2[0];
    let yDist = pos1[1] - pos2[1];
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  }
};

module.exports = Util;
