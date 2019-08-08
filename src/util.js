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
  }
};

module.exports = Util;
