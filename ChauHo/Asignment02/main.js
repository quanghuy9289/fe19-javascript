"use strict";
// Exercise 1

// 1.
const arr = new Array(10).fill();
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
// 2.
const showNum = function () {
  console.log("-----------");
  for (const i of arr) {
    console.log(i);
  }
};
showNum();

// 3
const entryVal = prompt("Put something to array?");
const arr3 = [];
const addToArr = function (val) {
  arr3.push(val);
};
addToArr(entryVal);

if (arr3.includes(entryVal)) console.log("Already have");
console.log(arr3);

// 4.
const findMax = function () {
  let max = 0;
  for (const i of arr) {
    if (i > max) max = i;
  }
  console.log(`The maximum is ${max}`);
};

// 5.
const arr5 = [1, 2, 3];
let sum = 0;
for (const i of arr5) {
  sum += i;
}
console.log(sum);

// 6.
const descending = (x, y) => x - y;
const arr6 = [5, 7, 91, 21, 4, 1, 0, 6];
console.log(arr6.sort(descending));

// 7.
const query = (id) => document.getElementById(id);
query("print").addEventListener("click", showNum);
query("find-maxNum").addEventListener("click", findMax);

// Exercise 2
let array, n, m;

const declareArray = function () {
  n = parseInt(prompt("Enter n(rows):"));
  m = parseInt(prompt("Enter m(columns):"));
  if (isNaN(n) || isNaN(m) || n < 0 || m < 0) {
    alert("Please enter valid rows and columns");
  } else {
    array = new Array(n);
    for (var i = 0; i < n; i++) {
      array[i] = new Array(m);
    }
  }
};

const initializeArray = function () {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      array[i][j] = parseInt(
        prompt("Enter value for array[" + i + "][" + j + "]: ")
      );
    }
  }
};

const printArray = function () {
  let arrString = "";
  for (let i = 0; i < n; i++) {
    arrString += array[i].join(" ");
    arrString += "\n";
  }
  alert(arrString);
};

const sum = function () {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    // using reduce function to calculate sum of each array[i] (array in row)
    sum += array[i].reduce(function (preValue, currentValue) {
      return preValue + currentValue;
    });
  }

  alert("Sum of all elements in array: " + sum);
};

const search = function () {
  const num = parseInt(prompt("Enter number to search:"));
  if (isNaN(num) || num < 0) {
    alert("Please enter integer number");
  } else {
    let isFound = false;
    for (let i = 0; i < n; i++) {
      const numIndex = array[i].indexOf(num);
      if (numIndex !== -1) {
        alert("Number " + num + " is exist in array");
        isFound = true;
        break;
      }
    }
  }
  if (!isFound) {
    alert("Number " + num + " is NOT in array");
  }
};

const sortArrayByAscending = function () {
  const comparison = function (x, y) {
    return x - y;
  };
  let arrBefore = "";
  for (let i = 0; i < n; i++) {
    arrBefore += array[i].join(" ");
    arrBefore += "\n";
  }

  let arrAfterSort = "";
  for (let i = 0; i < n; i++) {
    arrAfterSort += array[i].sort(comparison).join(" ");
    arrAfterSort += "\n";
  }

  alert(
    "Array before sort:\n" +
      arrBefore +
      "\n\n" +
      "Array after sort by ascending:\n" +
      arrAfterSort
  );
};

const showMenu = function () {
  let item;
  do {
    let menu = "1. Declare 2 dimentions array with n rows and m columns\n";
    menu += "2. Initialize value for array\n";
    menu += "3. Print array\n";
    menu += "4. Sum of all elements in array\n";
    menu += "5. Search a member\n";
    menu += "6. Sort all elements of array by ascending\n";
    menu += "7. Exit\n\n";

    item = parseInt(prompt(menu + "Select menu item:", 1));
    if (isNaN(item) || item < 1 || item > 7) {
      alert("Please enter valid menu item");
    } else {
      switch (item) {
        case 1: {
          declareArray();
          break;
        }
        case 2: {
          initializeArray();
          break;
        }
        case 3: {
          printArray();
          break;
        }
        case 4: {
          sum();
          break;
        }
        case 5: {
          search();
          break;
        }
        case 6: {
          sortArrayByAscending();
          break;
        }
      }
    }
  } while (item !== 7);
};

window.onload = function () {
  showMenu();
};

// Exercise 3
// const numOfName = Number(prompt("How many people?"));
// const names = [];
// for (let i = 0; i < numOfName; i++) {
//   names.push(prompt("Enter name"));
// }
// console.log(names);
