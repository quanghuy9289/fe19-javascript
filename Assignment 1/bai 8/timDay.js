"use strict"

var $ = function(id) {
    return document.getElementById(id);
};

var timDay = function (month) {
    var currentYear = new Date().getFullYear();

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            if (currentYear % 400 == 0 || (currentYear % 4 == 0 && currentYear % 100 != 0)){
                return 29;
            } else {
                return 28;
            }
    }
}

var processEntries = function () {
    var month = parseFloat($("month").value);
  
    if (isNaN(month) || month < 1 || month > 12 || !Number.isInteger(month)) {
      $("error").innerHTML = "Enter a valid month, please!";
      $("days").value = "";
    } else {
      $("error").innerHTML = "";
      $("days").value = timDay(month);
    }
  };
  
window.onload = function () {
    $("result").onclick = processEntries;
    $("month").focus();
  };