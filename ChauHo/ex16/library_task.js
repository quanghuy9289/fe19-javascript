"use strict";
const Task = function (task, date) {
  this.text = task;
  this.date = new Date(date);
};
Task.prototype.isValid = function () {
  if (this.text === "" || this.date.toString() === "Invalid Date") {
    return false;
  } else return true;
};
Task.prototype.toJSON = function () {
  const month = this.date.getMonth() + 1;
  this.shortDate = `${month}/${this.date.getDate()}/${this.date.getFullYear()}`;
  this.text = this.text.capitalize();
  return this;
};
