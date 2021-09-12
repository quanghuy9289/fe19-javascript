var $ = function (id) {
    return document.getElementById(id);
};
var m, n, array;
var start = function() {
  alert("Add a 2 dimensional array to start program");
  do {
  n = parseInt(prompt("Enter number of rows (n): "))
  m = parseInt(prompt("Enter number of columns (m): "));
  if (isNaN(m) || isNaN(n) || m <= 0 || n <= 0) {
    alert("Two number must be integer and greater than 0.");
  }
  // creat array
  } while (isNaN(n) || isNaN(m) || n<=0 || m<=0);
  array = new Array(n);
  for (var i = 0; i < n; i++) {
    array[i] = new Array(m);
  }
  for (var i = 0; i < n; i++) {
      for (var j = 0; j < m; j++) {
          array[i][j] = parseInt(prompt("Enter value of element array[" + i + "][" + j + "]"));
      }
  }
  // start menu 
  do {
    var menu = "Enter number of function to run it:\n\n";
    menu += "1. Print array.\n";
    menu += "2. Calculate the total of elements of array.\n";
    menu += "3. Check a number is exist in array or not.\n";
    menu += "4. Sort array by ascending\n";
    menu += "5. Exit program.\n\n";
    var func = parseInt(prompt(menu + "Run function: "));
    if(isNaN(func) || func < 1 || func > 5) {
      alert("Please enter a number already in menu.");
    } else {
      switch(func) {
        case 1: {
          printArray();
          break;
        }
        case 2: {
          totalArray();
          break;
        }
        case 3: {
          findNumber();
          break;
        }
        case 4: {
          sortByAsc();
          break;
        }
      }
    }
  } while (func !== 5)  
};

var printArray = function() {
    var arr = "";
    for (var i = 0; i < n; i++) {
        arr += array[i].join(" ");
        arr += "\n";
    }
    alert("The array you entered is:\n" + arr);
};

var totalArray = function () {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            sum += array[i][j];
        }
    }
    alert ("Sum of array is: " + sum);
};

var findNumber = function () {
    var num = parseInt(prompt("Enter number want to find in array: "));
    if (isNaN(num)) {
        alert("Please enter a valid number.");
    } else {
        for (var i = 0; i < n; i++) {
            if(array[i].indexOf(num) !== -1) {
                alert(num + " is exist in array");
            } else {
                alert(num + " is not exist in array");
            }
        }
    }
};

var sortByAsc = function () {
    var sortarr = "";
    var convert = function (a, b) {
      return a - b;
    }
    for (var i = 0; i < n; i++) {
        sortarr += array[i].sort(convert).join(" ");
        sortarr += "\n";
    }
    alert("Sort by Ascending : " + "\n" + sortarr);
};


  
  window.onload = function() {
    start();
  };
  
