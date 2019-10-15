
const Util = {
  inherits : function(ParentClass, ChildClass) {
    let Surrogate = function(){};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
    return ChildClass;
  },

  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }

};

module.exports = Util;