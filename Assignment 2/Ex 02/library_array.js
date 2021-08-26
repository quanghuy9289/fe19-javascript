"use strict";
var arr_tasks = {
  newArray: (content, arr, showError) => {
    var rows = content.split("\n");

    //Check number of rows
    if (rows.length !== n) {
      showError();
      return [];
    }
    var columns = 0;
    var element;

    //reset old array
    arr = [];
    for (var i = 0; i < rows.length; i++) {
      columns = rows[i].split(",");
      //Check number of columns
      if (columns.length !== m) {
        showError();
        return [];
      }
      var row = [];
      for (var j = 0; j < columns.length; j++) {
        element = parseFloat(columns[j]);
        //Check each element is number or not
        if (isNaN(element)) {
          showError();
          return [];
        }
        row.push(element);
      }
      arr.push(row);
    }
    return arr;
  },
  displayAll: (arr) => {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
      result += arr[i].toString() + "<br/>";
    }
    return result;
  },
  sum: (arr) => {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
      }
    }
    return sum;
  },
  isExisted: (arr, value) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(value) > -1) return true;
    }
    return false;
  },
  sortByDesc: (arr) => {
    var arrToSort = [];
    for (var row of arr) {
      arrToSort = arrToSort.concat(row);
    }
    arrToSort.sort((a, b) => a - b);

    //Convert reversely
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arrToSort.splice(0, arr[i].length);
    }
  },
};
