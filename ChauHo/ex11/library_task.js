"use strict";
const Task = function (task) {
  this.text = task;
};
Task.prototype.isValid = function () {
  if (this.text === "") {
    return false;
  } else {
    return true;
  }
};
Task.prototype.toString = function () {
  // capitalize
  const first = this.text.substring(0, 1);
  return first.toUpperCase() + this.text.substring(1);
};

// const TaskProto = {
//   isValid() {
//     if (this.text === "") return false;
//     else return true;
//   },
//   toString() {
//     if (this.text === "") return;
//     else {
//       const firstLetter = this.text.substring(0, 1);
//       return firstLetter.toUpperCase() + this.text.substring(1);
//     }
//   },
// };

// const getTask = function (task) {
//   const Task = Object.create(TaskProto);
//   this.text = task;
// };
