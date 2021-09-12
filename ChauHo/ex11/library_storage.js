"use strict";
const storagePrototype = {
  get: function () {
    const str = localStorage.getItem(this.key) || "";
    return str === "" ? [] : str.split("|");
  },
  set: function (arr) {
    if (Array.isArray(arr)) {
      const str = arr.join("|");
      localStorage.setItem(this.key, str);
    }
  },
  clear: function () {
    localStorage.setItem(this.key, "");
  },
};
const getTaskStorage = function (key) {
  const storage = Object.create(storagePrototype);
  storage.key = key;
  return storage;
};
