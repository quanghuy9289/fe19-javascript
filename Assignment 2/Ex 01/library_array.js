"use strict";

var arrayTask = {
  arr: [],
  isExisted: function (value) {
    return this.arr.indexOf(value) > -1;
  },
  printAll: function () {
    return this.arr.join(", ");
  },
  findMax: function () {
    var max = Number.MIN_VALUE;
    for (const e of this.arr) {
      if (max < e) max = e;
    }
    return max;
  },
  sum: function () {
    var sum = 0;
    for (const e of this.arr) {
      sum += e;
    }
    return sum;
  },
  sortByDesc: function () {
    this.arr.sort((a, b) => b - a);
  },
};
