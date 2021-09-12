"use strict";
const localStoragePrototype = {
  get: function () {
    return localStorage.getItem(this.key);
  },
  set: function (str) {
    localStorage.setItem(this.key, str);
  },
  clear: function () {
    localStorage.setItem(this.key, "");
  },
};

const stringArrayStoragePrototype = Object.create(localStoragePrototype); // inherit

stringArrayStoragePrototype.get = function () {
  const str = localStoragePrototype.get.call(this) || "";

  const reviver = function (key, value) {
    if (key === "date") return new Date(value);
    else return value;
  };
  return str === "" ? [] : JSON.parse(str, reviver);
};
stringArrayStoragePrototype.set = function (arr) {
  if (Array.isArray(arr)) {
    const str = JSON.stringify(arr);
    localStoragePrototype.set.call(this, str);
  }
};

const getTaskStorage = function (key) {
  const storage = Object.create(stringArrayStoragePrototype); // inherit
  storage.key = key; // add own property
  return storage;
};
