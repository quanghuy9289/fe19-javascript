var array, n, m;

var declareArray = function() {
  n = parseInt(prompt("Enter n rows: "));
  m = parseInt(prompt("Enter m collums: "));
  if(isNaN(n) || isNaN(m) || n < 0 || m <0) {
    alert("Please enter a valid number");
  } else {
    array = new Array(n);
    for (var i = 0; i < n; i++) {
      array[i] = new Array(m);
    }
  }
};

var initializeArray = function() {
  for(var i = 0; i < n; i++) {
    for(var j = 0; j < m; j++) {
      array[i][j] = parseInt(prompt("Enter value of array["+ i + "][" + j + "]"));
    }
  }
};

var printArray = function() {
  var str = "";
  for (var i = 0; i < n; i++) {
    str += array[i].join(" ");
    str += "\n";
  }
  alert(str);
};

var sumArray = function() {
  var sum = 0;
  for(var i = 0; i < n; i++) {
    sum += array[i].reduce(function (preValue, currentValue) {
      return preValue + currentValue;
    } );
  }
  alert("Sum of all elements in array is: " + sum);
};

var searchNumber = function() {
  var num = parseInt(prompt("Enter a number you want to find: "));
  if(isNaN(num) || num < 0) {
    alert("Please enter a valid number");
  } else {
    for (var i = 0; i < n; i++) {
      if(array[i].indexOf(num) !== -1) {
        alert(num + " is exists in array");
        break;
      }
      alert(num + " is not exist in array");
      break;     
    }
  }
};

var sortByAscending = function() {
  var arrBeforeSort = "";
  for (var i = 0; i < n; i++) {
    arrBeforeSort += array[i].join(" ");
    arrBeforeSort += "\n";
  }
  var comparision = function(a, b) {
    return a - b;
  };
  var arrAfterSort = "";
  for (var i = 0; i < n; i++) {
    arrAfterSort += array[i].sort(comparision).join(" ");
    arrAfterSort += "\n";
  }

  alert("Array before sort: \n" + arrBeforeSort + "\n\n" + "Array after sort:\n" + arrAfterSort);
};

var showMenu = function() {
  do {
    var menu = "1. Declare a 2 dimension array with n rows and m column.\n";
    menu += "2. Initialize value for array.\n";
    menu += "3. Print array.\n";
    menu += "4. Calculate the total of elements of array.\n";
    menu += "5. Search a number and check if it is exist in array.\n";
    menu += "6. Sort array by ascending\n";
    menu += "7. Exit program.\n\n";

    var selected = parseInt(prompt(menu + "Select a menu number: "));
    if(isNaN(selected) || selected < 1 || selected > 7) {
      alert("Please enter a valid number");
    } else {
      switch(selected) {
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
          sumArray();
          break;
        }
        case 5: {
          searchNumber();
          break;
        }
        case 6: {
          sortByAscending();
          break;
        }
      }
    }
  } while (selected !== 7)  
};

window.onload = function() {
  showMenu();
};


