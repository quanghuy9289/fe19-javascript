var $ = function(id) {
    return document.getElementById(id);
  }
  
var arr = [100, 95, 86, 10, 6, -3, -12, -65, -78, -91];
  
var print = function() {
    return arr.join(", ");
};
  
var findNum = function(number) {
    number = parseInt(prompt("Enter a number you want to find:"));
    if (isNaN(number)) {
        alert("Please enter a valid number")
    } else {
        if (arr.indexOf(number) > -1) {
        return number + " is exists in array";
        } else {
        return number + " is not exist in array";
        }
    }
};
  
var findMax = function() {
    var max = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }     
    }
    return "Maximum number is: " + max;
};
  
var sumArr = function() {
    var sum = 0;
    for (var i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    return "Sum of all numbers is: " + sum;
};
  
var sort = function() {
    var sortByDes = function(a,b) {
        return b - a;
    }
    return arr.sort(sortByDes).join(", ");
};
  
var menu = function() {
    var selected = $("select").value;
    switch(selected) {
        case "1": {
            $("display").value = print(arr);
            break;
        }
        case "2": {
            $("display").value = findNum();
            break;
        }
        case "3": {
            $("display").value = findMax();
            break;
        }
        case "4": {
            $("display").value = sumArr();
            break;
        }
        case "5": {
            $("display").value = sort();
            break;
        }
    };
};
  
window.onload = function() {
    $("run").onclick = menu;
}