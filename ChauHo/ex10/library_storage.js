"use strict";
const getStorage = function (key) {
  //get string from storage or an empty string if nothing in storage
  const storage = localStorage.getItem(key) || "";
  if (storage === "") {
    return [];
  } else {
    return storage.split("|");
  }
};

const setStorage = function (key, arr) {
  if (Array.isArray(arr)) {
    const storageString = arr.join("|");
    localStorage.setItem(key, storageString);
  }
};

const clearStorage = function (key) {
  localStorage.setItem(key, "");
};
