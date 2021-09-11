"use-strick";
var getStorage = function (key) {
  var storage = localStorage.getItem(key) || "";
  if (storage === "") {
    return [];
  } else {
    return storage.split("|");
  }
};
var setStorage = function (key, arr) {
  if (Array.isArray(arr)) {
    localStorage.setItem(key, arr.join("|"));
  }
};
var clearStorage = function (key) {
  localStorage.removeItem(key);
};
